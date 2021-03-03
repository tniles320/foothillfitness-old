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
});

router.post("/", upload.single("file"), (req, res) => {
  res.json(req.file).status(200);
});

module.exports = router;
