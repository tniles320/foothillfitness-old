const router = require("express").Router();
const cardioRoutes = require("./cardio");
const strengthRoutes = require("./strength");
const dealerRoutes = require("./dealer");
const imageRoutes = require("./image");

// Routes
router.use("/cardio", cardioRoutes);
router.use("/strength", strengthRoutes);
router.use("/dealer", dealerRoutes);
router.use("/image", imageRoutes);

module.exports = router;
