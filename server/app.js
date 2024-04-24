const express = require('express');
const path = require('path');
const cors = require('cors');

const channelRouter = require('./Routes/channelRoutes');
const editorRouter = require('./Routes/editorRoutes');
const streamRouter = require('./Routes/streamingRoutes.js');

const app = express();
app.use(cors());

const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);

io.listen(5505);

const secretFunction = (channelUsername, editorEmail) => {
  return `${channelUsername}&${editorEmail}`;
};

io.on('connection', socket => {
  socket.on('join', (channelUsername, editorEmail) => {
    //Get room Id
    const roomId = secretFunction(channelUsername, editorEmail);
    //joing the current socket
    socket.join(roomId);
    //emit another event fot the other client
    socket.emit('joinAlso', channelUsername, editorEmail);
    //handle that in other event handler
  });
  socket.on('finalJoin', (channelUsername, editorEmail) => {
    const roomId = secretFunction(channelUsername, editorEmail);
    socket.join(roomId);
  });
  socket.on('sendMessage', (message, channelUsername, editorEmail) => {
    //get room id
    const roomId = secretFunction(channelUsername, editorEmail);
    //broadcast the message event to all the client in the fetched room
    console.log('You are heard,you said:', message);
    io.to(roomId).emit('message', message, channelUsername, editorEmail);
  });
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/channel', channelRouter);
app.use('/editor', editorRouter);
app.use('/stream', streamRouter);

module.exports = app;
