const { ERROR_CODE_401 } = require('../utils/constants');

class AuthException extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_CODE_401;
    this.name = 'AuthException';
  }
}

module.exports = AuthException;
