const { Dealer } = require("../models");

// methods for the booksController
module.exports = {
  findById: function (req, res) {
    Dealer.findById(req.params.id)
      .then((dbDealer) => res.json(dbDealer))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  add: function (req, res) {
    Dealer.create(req.body)
      .then((dbDealer) => res.json(dbDealer))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  update: function (req, res) {
    Dealer.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbDealer) => res.json(dbDealer))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  remove: function (req, res) {
    Dealer.deleteOne({ _id: req.params.id })
      .then((dbDealer) => res.json(dbDealer))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
};
