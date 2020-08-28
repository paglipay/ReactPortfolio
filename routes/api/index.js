const router = require("express").Router();
const bookRoutes = require("./books");
const users = require("./users");
var authCheck = require("../../config/middleware/authCheck");

// Book routes
router.use("/books", authCheck, bookRoutes);
router.use("/users", users);

module.exports = router;
