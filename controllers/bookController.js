const asyncHandler = require("express-async-handler");


// Display list of all books.
exports.book_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book list");
});


// Display book create form on GET.
exports.book_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book create GET");
});

// Handle book create on POST.
exports.book_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book create POST");
});