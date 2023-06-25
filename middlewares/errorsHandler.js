const { ERROR_CODE_500 } = require('../utils/constants');

module.exports = (err, req, res, next) => {
  const { statusCode = ERROR_CODE_500, message } = err;

  res.status(statusCode)
    .send({
      message: statusCode === ERROR_CODE_500
        ? 'Ошибка на сервере'
        : message,
    });
  next();
};
