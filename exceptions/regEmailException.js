const { ERROR_CODE_409 } = require('../utils/constants');

class RegEmailException extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_CODE_409;
    this.name = 'RegEmailException';
  }
}

module.exports = RegEmailException;
