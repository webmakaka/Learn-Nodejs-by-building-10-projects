'use strict';

var Book = require('../models/bookModel');
var Category = require('../models/categoryModel');

module.exports = function (router) {

    router.get('/', function (req, res) {
        res.render('manage/index');
    });

    router.get('/books', function (req, res) {
        Book.find({}, function(err, books){
            if(err){
                console.log(err);
            }

            console.log('books: ' + books);

            var model = {
                books: books
            };

            res.render('manage/books/index', model);
        });
    });

    router.get('/categories', function (req, res) {
        Category.find({}, function(err, categories){
            if(err){
                console.log(err);
            }

            console.log('categories: ' + categories);

            var model = {
                categories: categories
            };

            res.render('manage/categories/index', model);
        });
    });
};
