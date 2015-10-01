var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var db = require('monk')('localhost/nodeblog');

router.get('/add', function(req, res, next) {
    res.render('addpost',{
        "title": "Add Post"
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

    // req.checkBody

});

module.exports = router;
