const Genre = require("../models/genre");

//display a list of Genre
exports.genreList = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre list");
};

//display detail page for a specific Genre
exports.genreDetail = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre detail: " + req.params.id);
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
