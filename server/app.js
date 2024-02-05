const express = require('express');
const channelRouter = require('./Routes/channelRoutes');
const editorRouter = require('./Routes/editorRoutes');
const streamRouter = require('./Routes/Streaming/index.js');
const path = require('path');   
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/channel', channelRouter);
app.use('/editor', editorRouter);
app.use('/stream',streamRouter)

module.exports = app;
