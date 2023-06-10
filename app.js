const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

const {PORT = 3000} = process.env;
const app = express();

app.use(express.json());
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true
});
app.use((req, res, next) => {
  req.user = {
    _id: '6480e584457169390896db47'
  };

  next();
});
app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
