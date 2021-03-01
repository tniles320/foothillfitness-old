const router = require("express").Router();
const cardioController = require("../../controllers/cardioController");

// routes for /api/product/:id
router
  .route("/:id")
  .get(cardioController.findById)
  .post(cardioController.add)
  .put(cardioController.update)
  .delete(cardioController.remove);

module.exports = router;
