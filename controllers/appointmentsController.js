const db = require("../models");
const moment = require("moment")

function getDaterange(start, end, arr) {
  if (!moment(start).isSameOrAfter(end)) {
    // if (arr.length == 0) arr.push(moment(start).format("dddd, MMMM Do YYYY, h:mm:ss a"));
    var next = moment(start).add(15, 'minutes');
    //  arr.push(next.format("dddd, MMMM Do YYYY, h:mm:ss a"));
    
    
    if (Math.random() >= 0.7) {
      arr.push(next.format("h:mm a"));
    }
    getDaterange(next, end, arr);
  } else {
    return arr;
  }
  return arr;
}
// Defining methods for the AppointmentsController
module.exports = {
  findAll: function (req, res) {
    db.Appointment
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAvailabletimesByDate: function (req, res) {
    console.log(req.params.date)
    let date_start = moment(req.params.date).add(8, 'hours');
    let date_end = moment(date_start).add(9, 'hours')
    console.log('date_end', date_end)
    console.log('date_start', date_start)
    db.Appointment
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(getDaterange(date_start, date_end, [])))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Appointment
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Appointment
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Appointment
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Appointment
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
