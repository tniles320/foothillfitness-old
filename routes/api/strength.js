const router = require("express").Router();
const strengthController = require("../../controllers/strengthController");

// routes for /api/product/:id
router
  .route("/:id")
  .get(strengthController.findById)
  .post(strengthController.add)
  .put(strengthController.update)
  .delete(strengthController.remove);

module.exports = router;
