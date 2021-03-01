const router = require("express").Router();
const userRoutes = require("./user");
const userLogin = require("./userLogin");
const userRegister = require("./userRegister");

// User routes
router.use("/user", userRoutes);
router.use("/login", userLogin);
router.use("/register", userRegister);
module.exports = router;
