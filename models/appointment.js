const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  visitor: { type: String, required: true },
  employee: { type: String, required: true },
  datetime: { type: Date, default: Date.now }
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;
