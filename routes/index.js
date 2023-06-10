const router = require('express').Router();
const { ERROR_CODE_404, PAGE_NOT_FOUND_RU } = require('../utils/constants');
const userRouter = require('./userRouter');
const cardRouter = require('./cardRouter');

router.use(userRouter);
router.use(cardRouter);
router.use('/*', (req, res) => {
  res.status(ERROR_CODE_404).send({ message: PAGE_NOT_FOUND_RU });
});

module.exports = router;
