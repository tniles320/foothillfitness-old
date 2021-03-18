const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/").post(userController.login);

// routes for /api/user/:id
router
  .route("/:id")
  .get(userController.findById)
  .post(userController.logout)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
