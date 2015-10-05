'use strict';

module.exports = function (router) {
    router.get('/', function (req, res) {
        res.render('manage/index');
    });

    router.get('/books', function (req, res) {
        res.render('manage/books/index');
    });

    router.get('/categories', function (req, res) {
        res.render('manage/categories/index');
    });
};
