const { ERROR_CODE_401 } = require('../utils/constants');

class NoAuthException extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_CODE_401;
    this.name = 'NoAuthException';
  }
}

module.exports = NoAuthException;
