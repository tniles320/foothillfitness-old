const router = require("express").Router();
const imageController = require("../../controllers/imageController");

// routes for /api/order/:id
router
  .route("/:id")
  .get(imageController.findById)
  .post(imageController.add)
  .put(imageController.update)
  .delete(imageController.remove);

module.exports = router;
