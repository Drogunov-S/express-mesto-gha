const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  updateAvatar,
} = require('../controllers/userController');

const {
  ROUTE_PATH_USERS,
  ROUTE_PATH_USERS_ID,
  ROUTE_PATH_USER_ME,
  ROUTE_PATH_USER_ME_AVATAR,
} = require('../utils/constants');

router.get(ROUTE_PATH_USERS, getUsers);
router.get(ROUTE_PATH_USERS_ID, getUserById);
router.post(ROUTE_PATH_USERS, createUser);
router.patch(ROUTE_PATH_USER_ME, updateUserById);
router.patch(ROUTE_PATH_USER_ME_AVATAR, updateAvatar);

module.exports = router;
