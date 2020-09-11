const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  email: { type: String, required: true },
  employee: { type: String, required: true },
  date: { type: Date, default: Date.now },
  uuid_id: { type: String, required: true }
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;
