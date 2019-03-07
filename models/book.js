const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: [],
  desctiption: String,
  pageCount: Number,
  image: String,
  url: String,
  publisher: String,
  publishedDate:{type:Date}

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
