const router = require('express').Router();
const { ERROR_CODE_404, PAGE_NOT_FOUND_RU } = require('../utils/constants');
const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const cardRouter = require('./cardRouter');
const { auth } = require('../middlewares/auth');

router.use(authRouter);
router.use(auth);
router.use(userRouter);
router.use(cardRouter);
router.use('/*', (req, res) => {
  res.status(ERROR_CODE_404).send({ message: PAGE_NOT_FOUND_RU });
});

module.exports = router;
