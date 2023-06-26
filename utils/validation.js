const { celebrate, Joi, Segments } = require('celebrate');

const regex = /\-\._\~\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=/;

module.exports.validateUserAvatar = celebrate({
  [Segments.BODY]: Joi.object().keys({
    avatar: Joi.string().pattern(regex).required(),
  }),
});
