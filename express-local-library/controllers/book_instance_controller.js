const BookInstance = require("../models/book_instance");
const { response } = require("express");

//display a list of all BookInstances
exports.bookInstanceList = function (req, res, next) {
  BookInstance.find()
    .populate("book") // populating the book section to hold book info, not just id
    .exec(function (err, bookInstanceList) {
      if (err) {
        return next(err);
      } // success fo render
      res.render("bookinstance_list", {
        title: "Book Instance List",
        bookInstanceList: bookInstanceList,
      });
    });
};

//display detail page for a specific BookInstance
exports.bookInstanceDetail = function (req, res) {
  BookInstance.findById(req.params.id)
    .populate("book")
    .exec(function (err, bookInstance) {
      if (err) {
        return next(err);
      }
      if (bookInstance == null) {
        let err = new Error("Book copy not found");
        err.status = 404;
        return next(err);
      }
      res.render("bookinstance_detail", {
        title: `Copy: ${bookInstance.title}`,
        bookInstance: bookInstance,
      });
    });
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
