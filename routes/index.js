var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Get Book Count page //

router.get('/books', function(req, res, next) {
  res.render('index', { title: 'Books' });
});

// Get Author Count page //
router.get('/authors', function(req, res, next) {
  res.render('index', { title: 'Authors' });
});

// Get Page Count page //
router.get('/pages', function(req, res, next) {
  res.render('index', { title: 'Pages' });
});

module.exports = router;
