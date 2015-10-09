var express = require('express');
var router = express.Router();

router.get('/add', function(req, res, next) {
  res.render('addcategory');
});

module.exports = router;
