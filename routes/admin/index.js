const router = require("express").Router();
const userRoutes = require("./user");
const userSessionRoutes = require("./userSession");
const userRegister = require("./userRegister");

// User routes
router.use("/user", userRoutes);
router.use("/user-session", userSessionRoutes);
router.use("/register", userRegister);
module.exports = router;
