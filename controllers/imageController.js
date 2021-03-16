const { Image } = require("../models");

// methods for the booksController
module.exports = {
  findAll: function (req, res) {
    Image.find({})
      .then((dbImage) => res.json(dbImage))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  findById: function (req, res) {
    Image.findById(req.params.id)
      .then((dbImage) => res.json(dbImage))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  add: function (req, res) {
    Image.create(req.body)
      .then((dbImage) => res.json(dbImage))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  update: function (req, res) {
    Image.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbImage) => res.json(dbImage))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  remove: function (req, res) {
    Image.deleteOne({ _id: req.params.id })
      .then((dbImage) => res.json(dbImage))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
};
