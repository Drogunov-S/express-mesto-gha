const router = require('express').Router();
const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const cardRouter = require('./cardRouter');
const { auth } = require('../middlewares/auth');
const { errorPage } = require('../middlewares/errorPage');
// const NotFoundException = require('../exceptions/notFoundException');
// const { PAGE_NOT_FOUND_RU } = require('../utils/constants');

router.use(authRouter);
router.use(auth);
router.use(userRouter);
router.use(cardRouter);
router.use('/*', errorPage);

module.exports = router;
