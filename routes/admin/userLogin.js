const router = require("express").Router();
const userController = require("../../controllers/userController");

// routes for /api/user/login
router.route("/").post(userController.login);

module.exports = router;
