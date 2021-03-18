const { UserSession } = require("../models");

// methods for the userController
module.exports = {
  findById: function (req, res) {
    UserSession.find({ userId: req.params.id })
      .then((dbUser) => res.json(dbUser))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
};
