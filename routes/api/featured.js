const router = require("express").Router();
const featuredController = require("../../controllers/featuredController");

// routes for /api/order/:id
router
  .route("/:id")
  .get(featuredController.findById)
  .post(featuredController.add)
  .put(featuredController.update)
  .delete(featuredController.remove);

module.exports = router;
