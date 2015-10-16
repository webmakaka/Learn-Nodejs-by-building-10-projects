var express = require('express');
var router = express.Router();

Class = require('../models/class');
Instructor = require('../models/instructor');
User = require('../models/user');


router.get('/classes', ensureAuthenticated, function(req, res, next) {
  Instructor.getInstructorByUsername(req.user.username, function(err, instructor){
    if(err){
      console.log(err);
      res.send(err);
    } else {
      console.log('instructor ' + instructor);
      res.render('instructors/classes', { "instructor": instructor});
    }
  });
});

router.post('/classes/register', function(req, res){
    info = [];
    info['instructor_username'] = req.user.username;
    info['class_id'] = req.body.class_id;
    info['class_title'] = req.body.class_title;

    Instructor.register(info, function(err, instructor){
        if(err) throw err;
        console.log(instructor);
    });

    req.flash('succes', 'You are now registered to teach this class');
    res.redirect('/instructors/classes');

});

function ensureAuthenticated(req, res, next){
  if (req.isAuthenticated()){
      return next();
  }
  res.redirect('/');
}

module.exports = router;
