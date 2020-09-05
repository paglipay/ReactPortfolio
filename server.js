const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const cors = require('cors')



const server = require('http').Server(app)
const io = require("socket.io")(server)

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cors())
// Add routes, both API and view
app.use(routes);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://user1:Pa55w0rd@cluster0.ay0lz.mongodb.net/dev?retryWrites=true&w=majority");

// Start the API server
server.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const users = {};

io.on('connection', (socket) => {
  if (!users[socket.id]) {
    users[socket.id] = socket.id;
  }
  socket.emit("yourID", socket.id);
  io.sockets.emit("allUsers", users);
  socket.on('disconnect', () => {
    delete users[socket.id];
    io.sockets.emit("userDisconnect", users);
  })

  socket.on("callUser", (data) => {
    io.to(data.userToCall).emit('hey', { signal: data.signalData, from: data.from });
  })

  socket.on("acceptCall", (data) => {
    io.to(data.to).emit('callAccepted', data.signal);
  })


  
  socket.on('join', ({ name, room }, callback) => {

    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.` });
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    console.log('sendMessage: ' + message)
    const user = getUser(socket.id);
    // io.to(user.room).emit('message', { user: user.name, text: message });
    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    delete users[socket.id];
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    }
  })

})