const User = require('../models/user');
const {
  ERROR_CODE_500,
  CODE_201,
  ERROR_CODE_400,
  ERR_MESSAGE_FORBIDDEN_DATA_REQUEST,
  ERROR_NOT_FOUND,
  ERR_MESSAGE_FORBIDDEN_ELEMENT_ID,
  ERROR_CODE_404,
  USER_RU,
} = require('../utils/constants');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send(users))
    .catch((err) => res.status(ERROR_CODE_500).send({ message: err }));
};

const getUserById = (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .orFail(new Error(ERROR_NOT_FOUND))
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(ERROR_CODE_400).send({ message: ERR_MESSAGE_FORBIDDEN_DATA_REQUEST });
      } else if (err.message === ERROR_NOT_FOUND) {
        res.status(ERROR_CODE_404)
          .send({ message: ERR_MESSAGE_FORBIDDEN_ELEMENT_ID(USER_RU, id) });
      } else {
        res.status(ERROR_CODE_500).send({ message: err.message });
      }
    });
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => {
      console.log('User created');
      res.status(CODE_201).send(user);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(ERROR_CODE_400).send({ message: err.message });
      } else {
        res.status(ERROR_CODE_500).send({ message: err.message });
      }
    });
};

const updateUserById = (req, res) => {
  const { _id, name, about } = req.body;
  User.findByIdAndUpdate(
    _id,
    { name, about },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((updatedUser) => res.send(updatedUser))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(ERROR_CODE_400).send({ message: err.message });
      } else if (err.name === 'CastError') {
        res.status(ERROR_CODE_400).send({ message: ERR_MESSAGE_FORBIDDEN_DATA_REQUEST });
      } else {
        res.status(ERROR_CODE_500).send({ message: err });
      }
    });
};
const updateAvatarById = (req, res) => {
  const { _id, avatar } = req.body;
  User.findByIdAndUpdate(
    _id,
    { avatar },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((updatedUser) => res.send(updatedUser))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(ERROR_CODE_400).send({ message: err.message });
      } else if (err.name === 'CastError') {
        res.status(ERROR_CODE_400).send({ message: ERR_MESSAGE_FORBIDDEN_DATA_REQUEST });
      } else {
        res.status(ERROR_CODE_500).send({ message: err });
      }
    });
};

module.exports = {
  getUsers, getUserById, createUser, updateUser: updateUserById, updateAvatar: updateAvatarById,
};
