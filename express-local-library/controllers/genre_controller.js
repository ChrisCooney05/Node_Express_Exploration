const Genre = require("../models/genre");
const async = require("async");
const book = require("../models/book");
const { BookInstanceDetail } = require("./book_instance_controller");

//display a list of Genre
exports.genreList = function (req, res, next) {
  Genre.find()
    .populate("genre")
    .sort([["name", "ascending"]])
    .exec(function (err, listGenre) {
      if (err) {
        return next(err);
      }
      res.render("genre_list", {
        title: "Genre List",
        genreList: listGenre,
      });
    });
};

//display detail page for a specific Genre
exports.genreDetail = function (req, res, next) {
  async.parallel(
    {
      genre: function (callback) {
        Genre.findById(req.params.id).exec(callback);
      }, //finds genre via params id in url

      genreBooks: function (callback) {
        BookInstanceDetail.find({ genre: req.params.id }).exec(callback);
      }, //finds all books that belong to that genre via the genre id
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.genre == null) {
        let err = new Error("Genre not found");
        err.status = 404;
        return next(err); //we set up or own error if genre == nul as findById() returns successfully even if null
      }
      res.render("genre_detail", {
        title: "Genre Details",
        genre: results.genre,
        genreBooks: results.genreBooks,
      });
    }
  );
};

//display Genre create for on GET
exports.genreCreateGet = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre create GET");
};

//handle Genre Create on POST
exports.genreCreatePost = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre create POST");
};

//display Genre delete form on GET
exports.genreDeleteGet = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre delete GET");
};

//handle Genre delete on Post
exports.genreDeletePost = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre delete POST");
};

//display Genre update form on GET
exports.genreUpdateGet = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre update GET");
};

//handle Genre update on POST
exports.genreUpdatePost = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre update POST");
};
