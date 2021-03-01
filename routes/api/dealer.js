const router = require("express").Router();
const dealerController = require("../../controllers/dealerController");

// routes for /api/order/:id
router
  .route("/:id")
  .get(dealerController.findById)
  .post(dealerController.add)
  .put(dealerController.update)
  .delete(dealerController.remove);

module.exports = router;
