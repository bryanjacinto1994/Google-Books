import { stringify } from "querystring";

const mongoose = require ("mongoose")
const Schema = mongoose.schema

const googleSchema = new Schema ({
    title: {type: stringify, required: true},
    author: {type: stringify, required: true},
    date: {type: Date, default: Date.now},
    thumbnailPic: {type: String},
    link: String,
    synopsis: String
}),

const Book = Mongoose.model("Book", googleSchema);

model.exports = Book