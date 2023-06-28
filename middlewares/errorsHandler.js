const { ERROR_CODE_500, ERR_MESSAGE_SERVER_ERROR } = require('../utils/constants');

module.exports = (err, req, res, next) => {
  const { statusCode = ERROR_CODE_500, message } = err;

  res.status(statusCode)
    .send({
      message: statusCode === ERROR_CODE_500
        ? ERR_MESSAGE_SERVER_ERROR
        : message,
    });
  next();
};
