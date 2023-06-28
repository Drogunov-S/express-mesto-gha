const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const { errors } = require('celebrate');
const errorsHandler = require('./middlewares/errorsHandler');
const router = require('./routes');

const app = express();
const {
  PORT,
  DB_SCHEMA,
  DB_PORT,
  DB_URL,
  REQUEST_RATE_LIMIT_WINDOWS_MS,
  REQUEST_RATE_LIMIT_COUNT,
} = require('./utils/config');

const limiter = rateLimit.rateLimit({
  windowMs: REQUEST_RATE_LIMIT_WINDOWS_MS,
  max: REQUEST_RATE_LIMIT_COUNT,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(express.json());
app.use(helmet);
app.use(cookieParser());
app.use(limiter);
mongoose.connect(`${DB_URL}:${DB_PORT}/${DB_SCHEMA}`, {
  useNewUrlParser: true,
});

app.use(router);

app.use(errors());
app.use(errorsHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
