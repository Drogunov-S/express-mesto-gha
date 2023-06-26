const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const {
  ERR_MESSAGE_MIN_VALID_USER_NAME,
  ERR_MESSAGE_MAX_VALID_USER_NAME,
  ERR_MESSAGE_MIN_VALID_USER_ABOUT,
  ERR_MESSAGE_MAX_VALID_USER_ABOUT,
  ERROR_CODE_401_MESSAGE,
} = require('../utils/constants');
const NoAuthException = require('../exceptions/authException');
const { DEFAULT_USER_NAME, DEFAULT_USER_ABOUT } = require('../utils/config');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [2, ERR_MESSAGE_MIN_VALID_USER_NAME],
    maxLength: [30, ERR_MESSAGE_MAX_VALID_USER_NAME],
    default: DEFAULT_USER_NAME,
  },
  about: {
    type: String,
    minLength: [2, ERR_MESSAGE_MIN_VALID_USER_ABOUT],
    maxLength: [30, ERR_MESSAGE_MAX_VALID_USER_ABOUT],
    default: DEFAULT_USER_ABOUT,
  },
  avatar: {
    type: String,
    validate: {
      validator: (value) => validator.isURL(value),
      message: 'Введен неверный адрес картинки',
    },
    default: 'https://yandex.ru/images/search?text=Собака%20Корги&nl=1&source=morda',
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: 'Введен неверный email адрес',
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
}, { versionKey: false });

// eslint-disable-next-line func-names
userSchema.statics.findByEmailCredentials = function (email, password) {
  return this.findOne({ email })
    // TODO попробовать через orFail
    .select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new NoAuthException(ERROR_CODE_401_MESSAGE));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new NoAuthException(ERROR_CODE_401_MESSAGE));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
