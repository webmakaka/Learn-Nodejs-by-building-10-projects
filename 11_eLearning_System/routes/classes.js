var express = require('express');
var router = express.Router();

Class = require('../models/class');


router.get('/', function(req, res, next) {
  Class.getClasses(function(err, classes){
    if(err){
      console.log(err);
      res.send(err);
    } else {

      console.log(classes);
      res.render('index', { "classes": classes});
    }
  },3);

});


router.get('/:id/details', function(req, res, next) {
  Class.getClassById([req.params.id], function(err, classname){
    if(err){
      console.log(err);
      res.send(err);
    } else {
      res.render('classes/details', { "class": classname});
    }
  });
});

module.exports = router;
