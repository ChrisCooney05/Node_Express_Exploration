const BookInstance = require("../models/book_instance");

//display a list of all BookInstances
exports.bookInstanceList = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance list");
};

//display detail page for a specific BookInstance
exports.BookInstanceDetail = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance detail: " + req.params.id);
};

//display BookInstance create form on GET
exports.bookInstanceCreateGet = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance create GET");
};

//handle BookInstance create on Post
exports.bookInstanceCreatePost = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance create POST");
};

//display BookInstance delete form on GET
exports.bookInstanceDeleteGet = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance delete GET");
};

//handle BookInstance delete on POST
exports.bookInstanceDeletePost = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance delete POST");
};

//display BookInstance update form on GET
exports.bookInstanceUpdateGet = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance update GET");
};

//handle BookInstance update on POST
exports.bookInstanceUpdatePost = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance update POST");
};
