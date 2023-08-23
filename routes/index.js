var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Get Book Count page //

router.get('/books', function(req, res, next) {
  res.render('books', { title: 'Books', bookCount: 7 });
});

// Get Author Count page //
router.get('/authors', function(req, res, next) {
  res.render('authors', { title: 'Authors', authorCount: 6});
});

// Get Page Count page //
router.get('/pages', function(req, res, next) {
  res.render('pages', { title: 'Pages', pagesCount: 2368});
});

module.exports = router;
