const router = require('express').Router();
const {
  login,
  createUser,
} = require('../controllers/userController');

const {
  ROUTE_PATH_REGISTER,
  ROUTE_PATH_LOGIN,
} = require('../utils/constants');

router.post(ROUTE_PATH_REGISTER, createUser);
router.post(ROUTE_PATH_LOGIN, login);

module.exports = router;

/* TODO
  В файле controllers/users.js создайте контроллер login, который получает из запроса почту и пароль и проверяет их.
  Если почта и пароль правильные, контроллер должен создавать JWT сроком на неделю.
  В пейлоуд токена следует записывать только свойство _id, которое содержит идентификатор пользователя:
{
  _id: "d285e3dceed844f902650f40"
}
JWT после создания должен быть отправлен клиенту.
Мы рекомендуем записывать JWT в httpOnly куку. Если вам проще сделать это в
теле ответа, такое решение тоже будет принято.
При неправильных почте и пароле контроллер должен вернуть ошибку 401.
*/
