const router = require("express").Router();
const bookRoutes = require("./books");
const appointmentRoutes = require("./appointments");
const roomRoutes = require("./rooms");

// Book routes
router.use("/books", bookRoutes);
router.use("/appointments", appointmentRoutes);
router.use("/rooms", roomRoutes);

module.exports = router;
