var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('doctors');
});

router.get('/add', function(req, res, next) {
  res.render('adddoctor');
});

router.get('/details/:id', function(req, res, next) {
  res.render('details');
});


module.exports = router;
