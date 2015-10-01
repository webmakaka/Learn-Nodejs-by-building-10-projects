var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var db = require('monk')('localhost/nodeblog');

router.get('/add', function(req, res, next) {

    var  categories = db.get('categories');

    categories.find({},{}, function(err, categories){
        res.render('addpost',{
            "title": "Add Post",
            "categories": categories
        });
    });
});

router.post('/add', function(req, res, next){
    // Ger form values
    var title    = req.body.title;
    var category = req.body.category;
    var body     = req.body.body;
    var author   = req.body.author;
    var data     = new Date();

    if(req.files.mainimage){
        var mainImageOriginalName = req.files.mainimage.originalname;
        var mainImageName         = req.files.mainimage.name;
        var mainImageMime         = req.files.mainimage.mimetype;
        var mainImagePath         = req.files.mainimage.path;
        var mainImageExt          = req.files.mainimage.extension;
        var mainImageSize         = req.files.mainimage.size;
    } else {
        var mainImageName = 'noimage.png';
    }

    // Form Validation

    req.checkBody('title', 'Title field is required').notEmpty();
    req.checkBody('body','Body field is required').notEmpty();

    // Check Errors

    var errors = req.validationErrors();

    if(errors){
        res.render('addpost', {
            "erors": errors,
            "title": title,
            "body": body
        });
    } else {
        var posts = db.get('posts');

        // Submit to db
        posts.insert({
            "title": title,
            "body": body,
            "category": category,
            "data": data,
            "author": author,
            "image": mainImageName
        }, function(err, post){
            if(err){
                res.send('There was an issue submitting the post');
            } else {
                req.flash('success', 'Post Submitted');
                res.location('/');
                res.redirect('/');
            }
        });
    }

    req.checkBody('name','Name field is required').notEmpty();
    req.checkBody('email','Email field is required').notEmpty();
    req.checkBody('email','Email not valid').isEmail();
    req.checkBody('username','Username field is required').notEmpty();
    req.checkBody('password','Password field is required').notEmpty();
    req.checkBody('password2','Password do not match').equals(req.body.password);

});

module.exports = router;
