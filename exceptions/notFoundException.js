const { ERROR_CODE_404 } = require('../utils/constants');

class NotFoundException extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_CODE_404;
    this.name = 'NotFoundException';
  }
}

module.exports = NotFoundException;
