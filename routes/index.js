const router = require('express').Router();
const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const cardRouter = require('./cardRouter');
const { auth } = require('../middlewares/auth');
const { errorPage } = require('../middlewares/errorPage');

router.use(authRouter);
router.use(auth);
router.use(userRouter);
router.use(cardRouter);
router.use('/*', errorPage);

module.exports = router;
