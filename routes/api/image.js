const router = require("express").Router();
const imageController = require("../../controllers/imageController");

router.route("/").get(imageController.findAll).post(imageController.add);

// routes for /api/order/:id
router
  .route("/:id")
  .get(imageController.findById)
  .put(imageController.update)
  .delete(imageController.remove);

module.exports = router;
