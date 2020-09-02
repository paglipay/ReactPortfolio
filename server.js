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
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

io.on('connection', (socket) => {
  // socket.on('join', (data) => {
  //     console.log(data)
  //     socket.join(data.room);
  //     io.in(data.room).emit('message', `New user ${data.name} joined ${data.room} room!`);
  // })

  // socket.on('message', (data) => {
  //     console.log(`message: ${data.msg}`);
  //     io.in(data.room).emit('message', data.msg);
  // });

  // socket.on('call', (data) => {
  //     console.log(`message: ${data.msg}`);
  //     io.in(data.room).emit('call', data.msg);
  // });

  // socket.on('disconnect', () => {
  //     console.log('user disconnected');
  //     io.emit('message', 'user disconnected');
  // })


  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    // socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    // io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    console.log('sendMessage: ' + message)
    const user = getUser(socket.id);
    // io.to(user.room).emit('message', { user: user.name, text: message });
    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });
})