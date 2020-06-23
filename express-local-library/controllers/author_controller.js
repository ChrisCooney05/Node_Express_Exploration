const Author = require("../models/author");

//display list of all Authors
exports.authorList = (req, res) => {
  res.send("NOT IMPLEMENTED: Author list");
};

//display detail page for a specific Author
exports.authorDetail = (req, res) => {
  res.send("NOT IMPLEMENTED: Author detail: " + req.params.id);
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
