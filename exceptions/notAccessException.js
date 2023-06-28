const { ERROR_CODE_403 } = require('../utils/constants');

class NotAccessException extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_CODE_403;
    this.name = 'NotAccessException';
  }
}

module.exports = NotAccessException;
