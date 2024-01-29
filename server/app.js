const express = require('express');
const channelRouter = require('./Routes/channelRoutes');
const editorRouter = require('./Routes/editorRoutes');

const app = express();
app.use(express.json());

app.use('/channel', channelRouter);
app.use('/editor', editorRouter);

module.exports = app;
