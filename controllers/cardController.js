const Card = require('../models/card');
const {
  ERROR_CODE_500,
  ERROR_CODE_400,
  ERR_MESSAGE_FORBIDDEN_DATA_REQUEST,
  ERR_MESSAGE_FORBIDDEN_ELEMENT_ID, CARD_RU,
  ERROR_NOT_FOUND,
  ERROR_CODE_404,
} = require('../utils/constants');

const getCards = (req, res) => {
  Card.find({})
    .populate('owner')
    .then((cards) => res.send(cards))
    .catch((err) => res.status(ERROR_CODE_500).send({ message: err.message }));
};
const createCard = (req, res) => {
  const card = req.body;
  Card.create(card)
    .then(({ _id }) => res.send({ id: _id }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(ERROR_CODE_400).send({ message: err.message });
      } else {
        res.status(ERROR_CODE_500).send({ message: err.message });
      }
    });
};

const deleteCardById = (req, res) => {
  const { id } = req.params;
  Card.findByIdAndDelete(id)
    .then((deletedLine) => res.send(deletedLine))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(ERROR_CODE_400).send(ERR_MESSAGE_FORBIDDEN_DATA_REQUEST);
      } else {
        res.status(ERROR_CODE_500).send({ message: err });
      }
    });
};

const addLike = (req, res) => {
  const { _id } = req.user;
  const { id } = req.params;
  Card.findByIdAndUpdate(id, { $addToSet: { likes: _id } }, { new: true })
    .orFail(new Error(ERROR_NOT_FOUND))
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(ERROR_CODE_400).send({ message: ERR_MESSAGE_FORBIDDEN_DATA_REQUEST });
      } else if (err.message === ERROR_NOT_FOUND) {
        res.status(ERROR_CODE_404)
          .send({ message: ERR_MESSAGE_FORBIDDEN_ELEMENT_ID(CARD_RU, id) });
      } else {
        res.status(ERROR_CODE_500).send({ message: err });
      }
    });
};

const removeLike = (req, res) => {
  const { _id } = req.user;
  const { id } = req.params;
  Card.findByIdAndUpdate(
    id,
    { $pull: { likes: _id } }, // убрать _id из массива
    { new: true },
  )
    .orFail(new Error(ERROR_NOT_FOUND))
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(ERROR_CODE_400).send({ message: ERR_MESSAGE_FORBIDDEN_DATA_REQUEST });
      } else if (err.message === ERROR_NOT_FOUND) {
        res.status(ERROR_CODE_404)
          .send({ message: ERR_MESSAGE_FORBIDDEN_ELEMENT_ID(CARD_RU, id) });
      } else {
        res.status(ERROR_CODE_500).send({ message: err });
      }
    });
};

module.exports = {
  getCards, createCard, deleteCardById, addLike, removeLike,
};
