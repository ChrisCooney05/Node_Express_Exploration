const Book = require("../models/book");

//this will display the website home page
exports.index = (req, res) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
};

//display a list of all books
exports.bookList = (req, res) => {
  res.send("NOT IMPLEMENTED: Book list");
};

//display detail page for a specific book
exports.bookDetail = (req, res) => {
  res.send("NOT IMPLEMENTED: Book detail: " + req.params.id);
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
exports.bookDeletePost = (req, res) => {
  res.send("NOT IMPLEMENTED: Book update POST");
};
