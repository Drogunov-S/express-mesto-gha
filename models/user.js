const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const validator = require('validator');
const {
  ERR_MESSAGE_MIN_VALID_USER_NAME,
  ERR_MESSAGE_MAX_VALID_USER_NAME,
  ERR_MESSAGE_MIN_VALID_USER_ABOUT,
  ERR_MESSAGE_MAX_VALID_USER_ABOUT,
  ERR_MESSAGE_BAD_AUTH, ERR_MESSAGE_USER_BAD_URL_AVATAR, ERR_MESSAGE_USER_BAD_EMAIL,
} = require('../utils/constants');
const { DEFAULT_USER_NAME, DEFAULT_USER_ABOUT, DEFAULT_USER_AVATAR } = require('../utils/config');
const AuthException = require('../exceptions/authException');

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
    default: DEFAULT_USER_AVATAR,
    validate: {
      validator: (value) => validator.isURL(value),
      message: ERR_MESSAGE_USER_BAD_URL_AVATAR,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: ERR_MESSAGE_USER_BAD_EMAIL,
    },
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
}, { versionKey: false });

// eslint-disable-next-line func-names
userSchema.statics.findByEmailCredentials = function (email, password) {
  return this.findOne({ email })
    // TODO попробовать через orFail
    .select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new AuthException(ERR_MESSAGE_BAD_AUTH));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new AuthException(ERR_MESSAGE_BAD_AUTH));
          }
          return user;
        });
    });
};

// eslint-disable-next-line func-names
userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

module.exports = mongoose.model('user', userSchema);
