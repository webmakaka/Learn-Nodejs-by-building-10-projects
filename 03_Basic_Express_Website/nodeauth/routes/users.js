var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  res.render('register', {
      'title': 'Register'
  });
});

router.get('/login', function(req, res, next) {
  res.render('login', {
      'title': 'Login'
  });
});

router.post('/register', function(req, res, next) {
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 =  req.body.password2;


    // Check for Image Field
    if(req.files.profileimage){
        console.log('uploading File...');

        // File Info
        var profileImageOriginalName = req.files.profileimage.originalname;
        var profileImageName = req.files.profileimage.name;

        var profileImageMime = req.files.profileimage.mimetype;
        var profileImagePath = req.files.profileimage.path;
        var profileImageExt = req.files.profileimage.extension;
        var profileImageSize = req.files.profileimage.size;
    } else {
        // Set a Default Image
        var profileImageName = 'noimage.png';
    }

    // Form Validation

    req.checkBody('name','Name field is required').notEmpty();
    req.checkBody('email','Email field is required').notEmpty();
    req.checkBody('email','Email not valid').isEmail();
    req.checkBody('username','Username field is required').notEmpty();
    req.checkBody('password','Password field is required').notEmpty();
    req.checkBody('password2','Password do not match').equals(req.body.password);

    // Check for errors
    var errors = req.validationErrors();

    if(errors){
        res.render('register', {
            errors: errors,
            name: name,
            email: email,
            username: username,
            password: password,
            password2: password2
        });
    } else {
        var newUser = new User({
            name: name,
            email: email,
            username: username,
            password: password,
            profileImage: profileImageName
        });

            // Create User
            // User.createUser(newUser, function(err, user){
            //     if(err)throw err;
            //     console.log(user);
            // });

            //Success Message
            req.flash('success', 'You are noew registered and may log in');

            res.location('/');
            res.redirect('/');
    }
});

module.exports = router;
