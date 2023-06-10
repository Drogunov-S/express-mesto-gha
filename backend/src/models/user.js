const {
  ERR_MESSAGE_MIN_VALID_USER_NAME
  , ERR_MESSAGE_MAX_VALID_USER_NAME
  , ERR_MESSAGE_MIN_VALID_USER_ABOUT
  , ERR_MESSAGE_MAX_VALID_USER_ABOUT
} = require('../utils/constants');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [2, ERR_MESSAGE_MIN_VALID_USER_NAME],
    maxLength: [30, ERR_MESSAGE_MAX_VALID_USER_NAME],
    required: true
  },
  about: {
    type: String,
    minLength: [2, ERR_MESSAGE_MIN_VALID_USER_ABOUT],
    maxLength: [30, ERR_MESSAGE_MAX_VALID_USER_ABOUT],
    required: true
  },
  avatar: {
    type: String,
    required: true
  }
}, { versionKey: false });

module.exports = mongoose.model('user', userSchema)
