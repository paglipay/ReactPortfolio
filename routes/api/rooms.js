const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
    .get((req, res) => { res.json({ msg: 'hello' }) })

module.exports = router;