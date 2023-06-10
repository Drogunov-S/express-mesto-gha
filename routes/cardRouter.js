const router = require('express').Router();
const {
  getCards, createCard, deleteCardById, addLike, removeLike,
} = require('../controllers/cardController');
const {
  ROUTE_PATH_CARDS_ID_LIKE,
  ROUTE_PATH_CARDS,
  ROUTE_PATH_CARDS_ID,
} = require('../utils/constants');

router.post(ROUTE_PATH_CARDS, createCard);
router.get(ROUTE_PATH_CARDS, getCards);
router.put(ROUTE_PATH_CARDS_ID_LIKE, addLike);
router.delete(ROUTE_PATH_CARDS_ID_LIKE, removeLike);
router.delete(ROUTE_PATH_CARDS_ID, deleteCardById);

module.exports = router;
