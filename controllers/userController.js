const User = require('../models/user');
const {
  ERROR_CODE_500,
  CODE_201,
  CODE_202,
  ERROR_CODE_400,
  ERR_MESSAGE_FORBIDDEN_DATA_REQUEST
} = require('../utils/constants');

const getUsers = (req, res) => {
  User.find({})
    .then(users => res.send(users))
    .catch(err => res.status(ERROR_CODE_500).send({message: err}));
}

const getUserById = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then(user => res.send(user))
    .catch(err => {
      if (err.name === 'CastError') {
        res.status(ERROR_CODE_400).send(ERR_MESSAGE_FORBIDDEN_DATA_REQUEST)
      } else {
        res.status(ERROR_CODE_500).send({message: err})
      }
    });
}

const createUser = (req, res) => {
  const {name, about, avatar} = req.body;

  User.create({name, about, avatar})
    .then(user => {
      console.log("User created");
      res.status(CODE_201).send(user);
    })
    .catch(err => {
      console.log("error create user");
      res.status(ERROR_CODE_500).send({message: err});
    })
}

const updateUserById = (req, res) => {
  const {_id, name, about} = req.body;
  User.findByIdAndUpdate(_id, {name: name, about: about})
    .then(updatedUser => res.status(CODE_202).send(updatedUser))
    .catch(err => {
      if (err.name === 'CastError') {
        res.status(ERROR_CODE_400).send(ERR_MESSAGE_FORBIDDEN_DATA_REQUEST)
      } else {
        res.status(ERROR_CODE_500).send({message: err})
      }
    });

}
const updateAvatarById = (req, res) => {
  const {_id, avatar} = req.body;
  User.findByIdAndUpdate(_id, {avatar})
    .then(updatedUser => res.status(CODE_202).send(updatedUser))
    .catch(err => {
      if (err.name === 'CastError') {
        res.status(ERROR_CODE_400).send(ERR_MESSAGE_FORBIDDEN_DATA_REQUEST)
      } else {
        res.status(ERROR_CODE_500).send({message: err})
      }
    });
}

module.exports = {getUsers, getUserById, createUser, updateUser: updateUserById, updateAvatar: updateAvatarById};
