const router = require("express").Router();

const booksController = require("../../controllers/usesController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

const usersController = require("../../controllers/usersController");
var passport = require("../../config/passport");

router.route("/")
    .get(usersController.findAll)
    .post(usersController.create);


router
    .route("/:id")
    .get(usersController.findById)
    .put(usersController.update)
    .delete(usersController.remove);

router
    .route("/signup")
    .post(usersController.signUpUser)

router.route("/login")
    .post(passport.authenticate("local"), usersController.loginUser)

router.route("/logout")
    .get(usersController.signOutUser)


module.exports = router;
