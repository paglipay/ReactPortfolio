import axios from "axios";

export default {
  // Gets all appointments
  getAppointments: function() {
    return axios.get("/api/appointments");
  },
  // Gets the appointment with the given id
  getAppointment: function(id) {
    return axios.get("/api/appointments/" + id);
  },
  // Deletes the appointments with the given id
  deleteAppointments: function(id) {
    return axios.delete("/api/appointments/" + id);
  },
  // Saves a appointment to the database
  saveAppointments: function(appointmentData) {
    console.log(appointmentData)
    return axios.post("/api/appointments", appointmentData);
  },
  getAvailableTimes: function(date) {
    return axios.get(`/api/appointments/availabletimes/${date}`);
  },
  getUsers: function() {

    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};
