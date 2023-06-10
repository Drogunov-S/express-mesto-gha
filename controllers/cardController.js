const Card = require('../models/card');
const {
  ERROR_CODE_500
  , CODE_201
  , CODE_202, ERROR_CODE_400, ERR_MESSAGE_FORBIDDEN_DATA_REQUEST
} = require('../utils/constants');

const getCards = (req, res) => {
  Card.find({})
    .populate('owner')
    .then(cards => res.send(cards))
    .catch(err => res.status(ERROR_CODE_500).send({message: err.message}))

}
const createCard = (req, res) => {
  const card = req.body;
  Card.create(card)
    .then(cards => res.status(CODE_201).send(cards))
    .catch(err => {
      if (err.name === 'ValidationError') {
        res.status(ERROR_CODE_400).send(ERR_MESSAGE_FORBIDDEN_DATA_REQUEST);
      } else {
        res.status(ERROR_CODE_500).send({message: err.message})
      }
    });
}

const deleteCardById = (req, res) => {
  const id = req.params.id;
  Card.findByIdAndDelete(id)
    .then((deletedLine) => res.send(deletedLine))
    .catch(err => {
      if (err.name === 'CastError') {
        res.status(ERROR_CODE_400).send(ERR_MESSAGE_FORBIDDEN_DATA_REQUEST)
      } else {
        res.status(ERROR_CODE_500).send({message: err})
      }
    });
}

const addLike = (req, res) => {
  const {userId} = req.body;
  const id = req.params.id;
  Card.findByIdAndUpdate(
    id,
    {$addToSet: {likes: userId}},
    {new: true}
  )
    .then(card => res.status(CODE_202).send(card))
    .catch(err => {
      if (err.name === 'CastError') {
        res.status(ERROR_CODE_400).send(ERR_MESSAGE_FORBIDDEN_DATA_REQUEST)
      } else {
        res.status(ERROR_CODE_500).send({message: err})
      }
    });
}

const removeLike = (req, res) => {
  const {userId} = req.body;
  const id = req.params.id;
  Card.findByIdAndUpdate(id, {$pull: {likes: userId}}, // убрать _id из массива
    {new: true})
    .then(card => res.send(card))
    .catch(err => {
      if (err.name === 'CastError') {
        res.status(ERROR_CODE_400).send(ERR_MESSAGE_FORBIDDEN_DATA_REQUEST)
      } else {
        res.status(ERROR_CODE_500).send({message: err})
      }
    });
}

module.exports = {getCards, createCard, deleteCardById, addLike, removeLike};
