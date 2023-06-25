const { ERROR_CODE_404 } = require('../utils/constants');

class UserNotFoundException extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_CODE_404;
    this.name = 'UserNotFoundException';
  }
}

module.exports = UserNotFoundException;
