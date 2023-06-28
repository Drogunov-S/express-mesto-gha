const router = require('express').Router();
const {
  getCards, createCard, deleteCardById, addLike, removeLike,
} = require('../controllers/cardController');
const {
  ROUTE_PATH_CARDS_ID_LIKE,
  ROUTE_PATH_CARDS,
  ROUTE_PATH_CARDS_ID,
} = require('../utils/constants');
const {
  validateCreateCard,
  validateCardId,
} = require('../middlewares/validation');

router.post(ROUTE_PATH_CARDS, validateCreateCard, createCard);
router.get(ROUTE_PATH_CARDS, getCards);
router.put(ROUTE_PATH_CARDS_ID_LIKE, validateCardId, addLike);
router.delete(ROUTE_PATH_CARDS_ID_LIKE, validateCardId, removeLike);
router.delete(ROUTE_PATH_CARDS_ID, validateCardId, deleteCardById);

module.exports = router;
