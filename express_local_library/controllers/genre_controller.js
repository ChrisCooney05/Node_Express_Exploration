const Genre = require("../models/genre");
const async = require("async");
const Book = require("../models/book");
const validator = require("express-validator");

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
        Book.find({ genre: req.params.id }).exec(callback);
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
exports.genreCreateGet = function (req, res, next) {
  res.render("genre_form", { title: "Create Genre" });
};

//handle Genre Create on POST
exports.genreCreatePost = [
  // Validate that the name field is not empty.
  validator.body("name", "Genre name required").trim().isLength({ min: 1 }),

  // Sanitize (escape) the name field.
  validator.sanitizeBody("name").escape(),

  // Process request after validation and sanitization.
  function (req, res, next) {
    // Extract the validation errors from a request.
    const errors = validator.validator(req);

    //Create a genre object with escaped and trimmed data.
    let genre = new Genre({ name: req.body.name });

    if (!errors.isEmpty()) {
      //there are errors. Render the form again with sanitized values/err messages.
      res.render("genre_form", {
        title: "Create Genre",
        genre: genre,
        errors: errors.array(),
      });
      return;
    } else {
      //Data from form is valid
      //check if Genre already exists
      Genre.findOne({
        name: req.body.name,
      }).exec(function (err, foundGenre) {
        if (err) {
          return next(err);
        }
        if (foundGenre) {
          //found Genre no need to make a new one
          res.render(found_genre.url);
        } else {
          genre.save(function (err) {
            if (err) {
              return next(err);
            }
            res.redirect(genre.url);
          });
        }
      });
    }
  },
];

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
