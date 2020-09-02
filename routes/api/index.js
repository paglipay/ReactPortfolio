const router = require("express").Router();
const bookRoutes = require("./books");
const roomRoutes = require("./rooms");

// Book routes
router.use("/books", bookRoutes);
router.use("/rooms", roomRoutes);

module.exports = router;
