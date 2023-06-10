const router = require('express').Router();
const {getCards, createCard, deleteCardById, addLike, removeLike} = require('../controllers/cardController');

router.post('/cards', createCard);
router.get('/cards', getCards);
router.put('/cards/:id/likes', addLike);
router.delete('/cards/:id/likes', removeLike);
router.delete('/cards/:id', deleteCardById);

module.exports = router;
