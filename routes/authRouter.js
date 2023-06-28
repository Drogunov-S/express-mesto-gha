const router = require('express').Router();
const {
  login,
  createUser,
} = require('../controllers/userController');

const {
  ROUTE_PATH_REGISTER,
  ROUTE_PATH_LOGIN,
} = require('../utils/constants');
const {
  validateAuth,
  validateUserCreate,
} = require('../utils/validation');

router.post(ROUTE_PATH_REGISTER, validateAuth, createUser);
router.post(ROUTE_PATH_LOGIN, validateUserCreate, login);

module.exports = router;
