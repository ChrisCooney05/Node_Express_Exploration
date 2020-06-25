const Author = require("../models/author");
const Book = require("../models/book");
const async = require("async");

//display list of all Authors
exports.authorList = function (req, res, next) {
  Author.find()
    .populate("author")
    .sort([["family_name", "ascending"]])
    .exec(function (err, listAuthors) {
      if (err) {
        return next(err);
      }
      res.render("author_list", {
        title: "Author List",
        authorList: listAuthors,
      });
    });
};

//display detail page for a specific Author
exports.authorDetail = function (req, res, next) {
  async.parallel(
    {
      author: function (callback) {
        Author.findById(req.params.id).exec(callback);
      },
      authorBooks: function (callback) {
        Book.find({ author: req.params.id }, "title summary").exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.author == null) {
        let err = new Error("Author not found");
        err.status = 404;
        return next(err);
      }
      res.render("author_details", {
        title: "Author Details",
        author: results.author,
        authorBooks: results.authorBooks,
      });
    }
  );
};

//display Author create form on GET
exports.authorCreateGet = (req, res) => {
  res.send("NOT IMPLEMENTED: Author create GET");
};

//handle Author create on POST
exports.authorCreatePost = (req, res) => {
  res.send("NOT IMPLEMENTED: Author create POST");
};

//display Author delete form on GET
exports.authorDeleteGet = (req, res) => {
  res.send("NOT IMPLEMENTED: Author delete GET");
};

//handle Author delete on POST
exports.authorDeletePost = (req, res) => {
  res.send("NOT IMPLEMENTED: Author delete POST");
};

//display Author update form on GET
exports.authorUpdateGet = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update GET");
};

//handle Author update on POST
exports.authorUpdatePost = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update POST");
};
