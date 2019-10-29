const express = require('express');
const app = express();
const googleBookRoutes = require("./books");

app.use('/books', googleBookRoutes);

module.exports = app;