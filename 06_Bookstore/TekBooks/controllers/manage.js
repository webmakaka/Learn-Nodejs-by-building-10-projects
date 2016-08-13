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

    // Add a New Book
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
            res.location('/manage/books/add');
            res.redirect('/manage/books/add');
        }

        if (isNaN(price)){
            req.flash('error', 'Price must be a number');
            res.location('/manage/books/add');
            res.redirect('/manage/books/add');
        }

        var newBook = new Book({
            title: title,
            category: category,
            author: author,
            publisher: publisher,
            price: price,
            description: description,
            cover: cover
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

    // Display Book Edit Form
    router.get('/books/edit/:id', function(req, res){
        Category.find({}, function(err, categories){
            Book.findOne({_id:req.params.id}, function(err, book){
                if(err){
                    console.log(err);
                }

                var model = {
                    book: book,
                    categories: categories
                };

                res.render('manage/books/edit', model);
            });
        });
    });

    // Edit Book
    router.post('/books/edit/:id', function(req, res){

        var title =  req.body.title && req.body.title.trim();
        var category = req.body.category && req.body.category.trim();
        var author = req.body.author && req.body.author.trim();
        var publisher = req.body.publisher && req.body.publisher.trim();
        var price = req.body.price && req.body.price.trim();
        var description = req.body.description && req.body.description.trim();
        var cover = req.body.cover && req.body.cover.trim();

        Book.update({_id: req.params.id},{
            title: title,
            category: category,
            author: author,
            publisher: publisher,
            price: price,
            description: description,
            cover: cover
        }, function(err){
            if(err){
                console.log('update book error', err);
            }

            req.flash('success', 'Book Updated');
            res.location('/manage/books');
            res.redirect('/manage/books');
            });
    });

    // Delete Book
    router.delete('/books/delete/:id', function(req, res){

        Book.remove({_id: req.params.id}, function(err){
            if(err){
                console.log('delete book error', err);
            }

            req.flash('success', 'Book Deleted');
            res.location('/manage/books');
            res.redirect('/manage/books');
        });
    });

    // Display category add Form
    router.get('/categories/add', function(req, res){
        res.render('manage/categories/add');
    });

    // Add a new Category
    router.post('/categories', function(req, res){
        var name = req.body.name && req.body.name.trim();

        if (name == ''){
            req.flash('error', 'Please fill out required field');
            res.location('/manage/categories/add');
            res.redirect('/manage/categories/add');
        }

        var newCategory = new Category({
            name: name
        });

        newCategory.save(function(err){
            if(err){
                console.log('save new category error', err);
            }

            req.flash('success', 'Category Added');
            res.location('/manage/categories');
            res.redirect('/manage/categories');
        });
    });

    // Display Category Edit Form
    router.get('/categories/edit/:id', function(req, res){
            Category.findOne({_id:req.params.id}, function(err, category){
                if(err){
                    console.log(err);
                }

                var model = {
                    category: category
                };

                res.render('manage/categories/edit', model);
            });
        });


    // Edit Book
    router.post('/categories/edit/:id', function(req, res){

        var name =  req.body.name && req.body.name.trim();

        Category.update({_id: req.params.id},{
            name: name
        }, function(err){
            if(err){
                console.log('update category error', err);
            }

            req.flash('success', 'Category Updated');
            res.location('/manage/categories');
            res.redirect('/manage/categories');
        });
    });


    // Delete Category
    router.delete('/categories/delete/:id', function(req, res){

        Category.remove({_id: req.params.id}, function(err){
            if(err){
                console.log('delete category error', err);
            }

            req.flash('success', 'Category Deleted');
            res.location('/manage/categories');
            res.redirect('/manage/categories');
        });
    });

}; // The End
