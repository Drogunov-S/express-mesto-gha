const { ERROR_CODE_400 } = require('../utils/constants');

class DataException extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_CODE_400;
    this.name = 'DataException';
  }
}

module.exports = DataException;
