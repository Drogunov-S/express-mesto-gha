const jwt = require('jsonwebtoken');
const AuthException = require('../exceptions/authException');
const {
  ERR_MESSAGE_NO_AUTH,
} = require('../utils/constants');
const { JWT_SECRET } = require('../utils/config');

module.exports.auth = (req, res, next) => {
  let payload;

  try {
    const { token } = req.cookie;
    if (!token) {
      return next(new AuthException(ERR_MESSAGE_NO_AUTH));
    }
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return next(new AuthException(ERR_MESSAGE_NO_AUTH));
  }

  req.user = payload;

  return next();
};
