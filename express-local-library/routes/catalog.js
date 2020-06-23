const express = require("express");
const router = express.Router();

//Requiring all the controller modules
const bookController = require("../controllers/book_controller");
const authorController = require("../controllers/author_controller");
const genreController = require("../controllers/genre_controller");
const bookInstanceController = require("../controllers/book_instance_controller");

/// BOOK ROUTES ///

//GET catalog homepage
router.get("/", bookController.index);

//GET request for creating a Book. must come before routes that display Book (uses :id)
router.get("/book/create", bookController.bookCreateGet);

//POST request for creating a book
router.post("/book/create", bookController.bookCreatePost);

// GET request to delete Book.
router.get("/book/:id/delete", bookController.bookDeleteGet);

// POST request to delete Book.
router.post("/book/:id/delete", bookController.bookDeletePost);

// GET request to update Book.
router.get("/book/:id/update", bookController.bookUpdateGet);

// POST request to update Book.
router.post("/book/:id/update", bookController.bookUpdatePost);

// GET request for one Book.
router.get("/book/:id", bookController.bookDetail);

// GET request for list of all Book items.
router.get("/books", bookController.bookList);

/// AUTHOR ROUTES ///

// GET request for creating Author. This must come before route for id (i.e. display author).
router.get("/author/create", authorController.authorCreateGet);

// POST request for creating Author.
router.post("/author/create", authorController.authorCreatePost);

// GET request to delete Author.
router.get("/author/:id/delete", authorController.authorDeleteGet);

// POST request to delete Author.
router.post("/author/:id/delete", authorController.authorDeletePost);

// GET request to update Author.
router.get("./author/:id/update", authorController.authorUpdateGet);

// POST request to update Author.
router.post("/author/:id/update", authorController.authorUpdatePost);

// GET request for one Author.
router.get("/author/:id", authorController.authorDetail);

// GET request for list of all Authors.
router.get("/authors", authorController.authorList);

/// GENRE ROUTES ///

// GET request for creating a Genre. This must come before route that displays Genre (uses id).
router.get("/genre/create", genreController.genreCreateGet);

//POST request for creating Genre.
router.post("/genre/create", genreController.genreCreatePost);

// GET request to delete Genre.
router.get("/genre/:id/delete", genreController.genreDeleteGet);

// POST request to delete Genre.
router.post("/genre/:id/delete", genreController.genreDeletePost);

// GET request to update Genre.
router.get("/genre/:id/update", genreController.genreUpdateGet);

// POST request to update Genre.
router.post("genre/:id/update", genreController.genreUpdatePost);

// GET request for one Genre.
router.get("/genre/:id", genreController.genreDetail);

// GET request for list of all Genre.
router.get("/genres", genreController.genreList);
