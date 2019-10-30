const express = require('express');
const app = express();
const axios = require("axios")
const db = require("../../models")
const googleBooksController = require('../../controllers/googleBooksController')

module.exports = function (app) {
    app.get("/api/books", (req, res) => {
        db.Book.find().then(
            (dbModel) => {
                res.json(dbModel);
            }
        ).catch(
            (err) => {
                res.json({ error: err });
            }
        );
    });

    app.post("/api/books", (req, res) => {
        // set bookTitle to the req.body.title with spaces replaced with plus signs(+)
        let bookTitle = req.body.title.replace(/\s/g, "+");
        axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${process.env.GBOOKS_KEY}`
        ).then(
            (response) => {
                res.json(response.data.items)
            }
        ).catch(
            (err) => {
                res.json({ error: error })
            }
        );
    });




    // ------------------
    import axios from "axios"

export default {
    // Get book from google search 
    getGoogleSearchBooks: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

    // Gets all books
    getBooks: function () {
        return axios.get("/api/books");
    },

    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },

    // Saves a book to the database
    saveBook: function (savedBooks) {
        return axios.post("/api/books/", savedBooks);
    },

    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }

}







    // app.route('/api/books')
    //     .get(googleBooksController.findAll)
    //     .post(googleBooksController.create)

    // app.route('/api/books/:id')
    //     .get(googleBooksController.findById)
    //     .put(googleBooksController.update)
    //     .delete(googleBooksController.remove)

}