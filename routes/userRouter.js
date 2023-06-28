const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  updateAvatarById,
  getAboutMe,
} = require('../controllers/userController');

const {
  ROUTE_PATH_USERS,
  ROUTE_PATH_USERS_ID,
  ROUTE_PATH_USER_ME,
  ROUTE_PATH_USER_ME_AVATAR,
} = require('../utils/constants');
const {
  validateUserId,
  validateUser,
  validateUserAvatar,
} = require('../middlewares/validation');

router.get(ROUTE_PATH_USER_ME, getAboutMe);
router.get(ROUTE_PATH_USERS, getUsers);
router.get(ROUTE_PATH_USERS_ID, validateUserId, getUserById);
router.post(ROUTE_PATH_USERS, createUser);
router.patch(ROUTE_PATH_USER_ME, validateUser, updateUserById);
router.patch(ROUTE_PATH_USER_ME_AVATAR, validateUserAvatar, updateAvatarById);

module.exports = router;
