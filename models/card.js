const mongoose = require('mongoose');
const { ERR_MESSAGE_MIN_VALID_CARD_NAME, ERR_MESSAGE_MAX_VALID_CARD_NAME } = require('../utils/constants');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [2, ERR_MESSAGE_MIN_VALID_CARD_NAME],
    maxLength: [30, ERR_MESSAGE_MAX_VALID_CARD_NAME],
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    default: [],
  }],
  createAt: {
    type: Date,
    default: Date.now,
  },
}, { versionKey: false });

module.exports = mongoose.model('card', cardSchema);
