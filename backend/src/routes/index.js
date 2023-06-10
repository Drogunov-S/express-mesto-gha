const router = require('express').Router();
const userRouter = require('./userRouter');
const cardRouter = require('./cardRouter');

router.use(userRouter);
router.use(cardRouter);

module.exports = router;
