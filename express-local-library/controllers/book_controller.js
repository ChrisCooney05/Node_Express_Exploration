const Book = require("../models/book");
const Author = require("../models/author");
const Genre = require("../models/genre");
const BookInstance = require("../models/book_instance");
const async = require("async");
//this will display the website home page
exports.index = function (req, res) {
  async.parallel(
    {
      bookCount: function (callback) {
        Book.countDocuments({}, callback); //empty object passed in as match condition to find all documents in this collection
      },
      bookInstanceCount: function (callback) {
        BookInstance.countDocuments({}, callback);
      },
      BookInstanceAvailableCount: function (callback) {
        BookInstance.countDocuments({ status: "Available" }, callback);
      },
      authorCount: function (callback) {
        Author.countDocuments({}, callback);
      },
      genreCount: function (callback) {
        Genre.countDocuments({}, callback);
      },
    }, //this async call returns an object with key:value pares with the results of our functions
    function (err, result) {
      res.render("index", {
        title: "Local Library Home",
        error: err,
        data: result,
      });
    } // this is our callback that is executed once all the async functions are complete, with result being our object
  );
};

//display a list of all books
exports.bookList = function (req, res, next) {
  Book.find({}, "title author") // finds all book items and returns only title and author(_id and virtual also returned)
    .populate("author") //stores full author details in result over the author id
    .exec(function (err, listBooks) {
      //on success call back executed and JSON passed into new view
      if (err) {
        return next(err);
      } // Successful so render
      res.render("book_list", { title: "Book List", bookList: listBooks });
    });
};

//display detail page for a specific book
exports.bookDetail = function (req, res, next) {
  async.parallel(
    {
      book: function (callback) {
        Book.findById(req.params.id)
          .populate("author")
          .populate("genre")
          .exec(callback);
      },
      bookInstance: function (callback) {
        BookInstance.find({ book: req.params.id }).exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.book == null) {
        let err = new Error("Book not found");
        err.status = 404;
        return next(err);
      }
      res.render("book_detail", {
        title: results.book.title,
        bookInstances: results.bookInstance,
      });
    }
  );
};

//display book create form on GET
exports.bookCreateGet = (req, res) => {
  res.send("NOT IMPLEMENTED: Book create GET");
};

//handle book create on POST
exports.bookCreatePost = (req, res) => {
  res.send("NOT IMPLEMENTED: Book create POST");
};

//display book delete form on get
exports.bookDeleteGet = (req, res) => {
  res.send("NOT IMPLEMENTED: Book delete GET");
};

//handle book delete Post
exports.bookDeletePost = (req, res) => {
  res.send("NOT IMPLEMENTED: Book delete POST");
};

//display book update on GET
exports.bookUpdateGet = (req, res) => {
  res.send("NOT IMPLEMENTED: Book update GET");
};

//handle book delete on POST
exports.bookUpdatePost = (req, res) => {
  res.send("NOT IMPLEMENTED: Book update POST");
};
