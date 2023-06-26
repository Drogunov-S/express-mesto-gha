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
