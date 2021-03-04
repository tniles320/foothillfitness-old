const router = require("express").Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

//Init Upload
const upload = multer({
  storage: storage,
}).single("file");

router.post("/", function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log("MulterError", err);
      res.status(403);
    } else if (err) {
      console.log("UnhandledError", err);
      res.status(403);
    } else {
      res.json(req.file).status(200);
    }
  });
});

module.exports = router;
