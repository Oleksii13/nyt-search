const db = require("../models");
const axios = require("axios");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book.find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book.find({ title: req.body.volumeInfo.title }, function(err, docs) {
      if (!docs.length) {
        let book = {
          title: req.body.volumeInfo.title,
          author: req.body.volumeInfo.authors,
          description: req.body.volumeInfo.description,
          pageCount: req.body.volumeInfo.pageCount,
          image: req.body.volumeInfo.imageLinks.smallThumbnail,
          url: req.body.volumeInfo.previewLink,
          publisher: req.body.volumeInfo.publisher,
          publishedDate: req.body.volumeInfo.publishedDate
        };
        db.Book.create(book)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      } else {
        console.log("Book exist");
      }
    });
  },
  remove: function(req, res) {
    db.Book.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  google: function(req, res) {
    axios
      .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
      .then(results => res.json(results.data.items))
      .catch(err => res.status(422).json(err));
  }
};
