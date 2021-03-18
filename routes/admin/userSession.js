const router = require("express").Router();
const userSessionController = require("../../controllers/userSessionController");

// routes for /api/user/:id
router.route("/:id").get(userSessionController.findById);

module.exports = router;
