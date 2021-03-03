const router = require("express").Router();
const brandController = require("../../controllers/brandController");

// routes for /api/order/:id
router
  .route("/:id")
  .get(brandController.findById)
  .post(brandController.add)
  .put(brandController.update)
  .delete(brandController.remove);

module.exports = router;
