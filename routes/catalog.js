const express = require("express");
const router = express.Router();

// Require controller modules.
const book_controller = require("../controllers/bookController");


// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get("/book/create", book_controller.book_create_get);

// POST request for creating Book.
router.post("/book/create", book_controller.book_create_post);

// GET request for list of all Book items.
router.get("/books", book_controller.book_list);

module.exports = router;
