const router = require("express").Router();
const bookRoutes = require("./books");

const appointmentRoutes = require("./appointments");
const roomRoutes = require("./rooms");

// Book routes
router.use("/books", bookRoutes);
router.use("/appointments", appointmentRoutes);
router.use("/rooms", roomRoutes);

const users = require("./users");
var authCheck = require("../../config/middleware/authCheck");

// Book routes
router.use("/books", authCheck, bookRoutes);
router.use("/users", users);


module.exports = router;
