const path = require('path');
const apiRoutes = require('./api');
const express = require('express');
const app = express();

app.use('/api', apiRoutes);

app.use(function(req, res){
    res.sendFile(path.join(__dirname, '..client/build/index.html'));

});

module.exports = app;

