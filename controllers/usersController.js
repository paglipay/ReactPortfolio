const db = require("../models");

// Defining methods for the booksController
module.exports = {
    signUpUser: function (req, res) {
        db.User.findAll({
            where: { username: req.body.username }
        }).then(function (users) {
            if (users.length > 0) {
                res.json({
                    duplicateUser: true
                });
                //At some point, make sure that only one user can be associated with an email.
            } else {
                db.User.create({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password
                }).then(function () {
                    res.send({ redirect: '/' });
                }).catch(function (err) {
                    res.json(err);
                });
            }
        })
    },

    findAll: function (req, res) {
        db.Book
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Book
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Book
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Book
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Book
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
