module.exports.PORT = process.env.PORT || 3000;
module.exports.DB_URL = 'mongodb://localhost';
module.exports.DB_PORT = '27017';
module.exports.DB_SCHEMA = 'mestodb';

module.exports.REQUEST_RATE_LIMIT_WINDOWS_MS = 15 * 60 * 1000; // 15 minutes
module.exports.REQUEST_RATE_LIMIT_COUNT = 100;

module.exports.COOKIE_LIAVE_TIME = 3600000 * 24 * 7;
module.exports.HTTP_ONLY = true;

module.exports.JWT_SECRET = '9e4182a7216d6400412b6e201e049d1590d63b8531f00921f484597beead8b0c';
module.exports.JWT_EXPIRES_IN = '7d';
module.exports.JWT_NAME_FIELD = 'token';
module.exports.HASH_SALT = 10;

module.exports.DEFAULT_USER_NAME = 'Жак-Ив Кусто';
module.exports.DEFAULT_USER_ABOUT = 'Исследователь';
module.exports.DEFAULT_USER_AVATAR = 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png';
