const NotFoundException = require('../exceptions/notFoundException');
const { PAGE_NOT_FOUND_RU } = require('../utils/constants');

module.exports.errorPage = (req, res, next) => next(new NotFoundException(PAGE_NOT_FOUND_RU));
