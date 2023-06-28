const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const errorsHandler = require('./middlewares/errorsHandler');
const router = require('./routes');
const {
  PORT, DB_SCHEMA, DB_PORT, DB_URL,
} = require('./utils/config');

const app = express();

app.use(express.json());
app.use(cookieParser());

mongoose.connect(`${DB_URL}:${DB_PORT}/${DB_SCHEMA}`, {
  useNewUrlParser: true,
});

app.use(router);

app.use(errors());
app.use(errorsHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
