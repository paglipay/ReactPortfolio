const router = require("express").Router();
const appointmentsController = require("../../controllers/appointmentsController");

// Matches with "/api/appointments"
// router.route("/")
// .get(booksController.findAll)
// .post(booksController.create);

// Matches with "/api/appointments/:id"
router
    .route("/availabletimes/:date")
    .get(appointmentsController.findAvailabletimesByDate)

// // Matches with "/api/appointments/:id"
// router
//     .route("/:id")
//     .get(appointmentsController.findById)
//     .put(appointmentsController.update)
//     .delete(appointmentsController.remove);

module.exports = router;
