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

    router.get('/books/add', function(req, res){
        Category.find({}, function(err, categories){
            if(err){
                console.log(err);
            }

            var model = {
                categories: categories
            };

            res.render('manage/books/add', model);
        });
    });


    router.post('/books', function(req, res){

        var title =  req.body.title && req.body.title.trim();
        var category = req.body.category && req.body.category.trim();
        var author = req.body.author && req.body.author.trim();
        var publisher = req.body.publisher && req.body.publisher.trim();
        var price = req.body.price && req.body.price.trim();
        var description = req.body.description && req.body.description.trim();
        var cover = req.body.cover && req.body.cover.trim();

        if (title == '' || price == ''){
            req.flash('error', 'Please fill out required fields');
            req.location('/manage/books/add');
            res.redirect('/manage/books/add');
        }

        if (isNaN(price)){
            req.flash('error', 'Price must be a number');
            req.location('/manage/books/add');
            res.redirect('/manage/books/add');
        }

        var newBook = new Book({
            title: title,
            category: category,
            description: description,
            author: author,
            publisher: publisher,
            cover: cover,
            price: price
        });

        newBook.save(function(err){
            if(err){
                console.log('save error', err);
            }

            req.flash('success', 'Book Added');
            res.location('/manage/books');
            res.redirect('/manage/books');
        });
    });

}; // The End
