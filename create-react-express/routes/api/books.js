const express = require('express');
const app = express();
const googleBooksController = require('../../controllers/googleBooksController')

app.route('/')
    .get(googleBooksController.findAll)
    .post(googleBooksController.create)

app.route('/:id')
    .get(googleBooksController.findById)
    .put(googleBooksController.update)
    .delete(googleBooksController.remove)

module.exports = app;