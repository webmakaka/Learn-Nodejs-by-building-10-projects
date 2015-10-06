'use strict';

var Book = require('../models/bookModel');


module.exports = function (router) {
    router.get('/', function (req, res) {
        Book.find({}, function(err, books){
            if(err){
                console.log(err);
            }

            var model = {
                books: books
            };

            res.render('index', model);
        });
    });
};
