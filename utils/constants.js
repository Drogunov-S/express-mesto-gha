module.exports.USER_RU = 'Пользователя';
module.exports.CARD_RU = 'Карточки';
module.exports.PAGE_NOT_FOUND_RU = 'Страница не найдена';
module.exports.ACCESS_AUTH_RU = 'Вы вошли в систему';
module.exports.MESSAGE_CARD_DELETE = 'Пост удален';

module.exports.CODE_201 = 201;
module.exports.CODE_202 = 202;
module.exports.ERROR_CODE_400 = 400;
module.exports.ERROR_CODE_401 = 401;
module.exports.ERROR_CODE_404 = 404;
module.exports.ERROR_CODE_403 = 403;
module.exports.ERROR_CODE_409 = 409;
module.exports.ERROR_CODE_409_MESSAGE = 'Регистрация с данным eMail невозможна';
module.exports.ERROR_CODE_500 = 500;
module.exports.ERROR_CODE_11000 = 11000;
module.exports.ERROR_CAST = 'CastError';

module.exports.ERROR_VALIDATION = 'ValidationError';
module.exports.ERROR_NOT_FOUND = 'NotFound';

module.exports.ERR_MESSAGE_SERVER_ERROR = 'Ошибка на сервере';
module.exports.ERR_MESSAGE_NO_AUTH = 'Необходимо авторизоваться';
module.exports.ERR_MESSAGE_BAD_AUTH = 'Неправильные почта или пароль';

module.exports.ERR_MESSAGE_MIN_VALID_CARD_NAME = 'Название должно быть не менее 2 символов';
module.exports.ERR_MESSAGE_MAX_VALID_CARD_NAME = 'Название должно быть не более 30 символов';
module.exports.ERR_MESSAGE_DELETE_OTHER_CARD = 'Нельзя удалить карточки других пользователей';
// module.exports.ERR_MESSAGE_CARD_BAD_URL = 'Нельзя удалить карточки других пользователей';

module.exports.ERR_MESSAGE_MIN_VALID_USER_NAME = 'Имя должно быть не менее 2 символов';
module.exports.ERR_MESSAGE_MAX_VALID_USER_NAME = 'Имя должно быть не более 30 символов';
module.exports.ERR_MESSAGE_MIN_VALID_USER_ABOUT = 'О себе должно быть не менее 2 символов';
module.exports.ERR_MESSAGE_MAX_VALID_USER_ABOUT = 'О себе должно быть не более 30 символов';
module.exports.ERR_MESSAGE_USER_BAD_URL_AVATAR = 'Введен неверный адрес картинки';
module.exports.ERR_MESSAGE_USER_BAD_EMAIL = 'Введен неверный адрес картинки';

module.exports.ERR_MESSAGE_FORBIDDEN_DATA_REQUEST = 'Переданы некорректные данные';
module.exports.ERR_MESSAGE_FORBIDDEN_ELEMENT_ID = (elementName, id) => `${elementName} с данным _id: ${id} не найдено`;

module.exports.ROUTE_PATH_ALL = '/*';
module.exports.ROUTE_PATH_LOGIN = '/signin';
module.exports.ROUTE_PATH_REGISTER = '/signup';
module.exports.ROUTE_PATH_USERS = '/users';
module.exports.ROUTE_PATH_USERS_ID = '/users/:id';
module.exports.ROUTE_PATH_USER_ME = '/users/me';
module.exports.ROUTE_PATH_USER_ME_AVATAR = '/users/me/avatar';

module.exports.ROUTE_PATH_CARDS = '/cards';
module.exports.ROUTE_PATH_CARDS_ID = '/cards/:id';
module.exports.ROUTE_PATH_CARDS_ID_LIKE = '/cards/:id/likes';
