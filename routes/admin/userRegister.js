const router = require("express").Router();
const userController = require("../../controllers/userController");

// routes for /api/user/register
router.route("/").post(userController.register);

module.exports = router;
