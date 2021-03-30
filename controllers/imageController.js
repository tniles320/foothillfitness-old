const fs = require("fs");

module.exports = {
  remove: function (req, res) {
    const image = req.params.id;
    try {
      fs.unlinkSync(`public/uploads/${image}`);
      //file removed
    } catch (err) {
      console.error(err);
    }
  },
};
