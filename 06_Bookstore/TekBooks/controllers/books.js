'use strict';
var Book = require('../models/bookModel');
var Category = require('../models/categoryModel');

module.exports = function (router) {
    router.get('/', function (req, res) {
        res.render('index');
    });

    router.get('/details/:id', function (req, res) {
        Book.findOne({
            _id:req.params.id
        }, function(err, book){
            if(err){
                console.log(err);
            }

            var model = {
                book: book
            };

            res.render('books/details', model);
        });
    });
};
