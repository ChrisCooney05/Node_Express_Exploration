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
router.get("/book/:id/update", bookController.bookUpdatePost);

// GET request for one Book.
router.get("/book/:id", bookController.bookDetail);

// GET request for list of all Book items.
router.get("/books", bookController.bookList);
