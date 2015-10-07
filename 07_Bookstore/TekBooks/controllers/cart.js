'use strict';
var Book = require('../models/bookModel');
var Category = require('../models/categoryModel');

module.exports = function (router) {
    router.get('/', function (req, res) {
        // Get cart from session
        var cart = req.session.cart;
        var displayCart = {items:[], total:0};
        var total = 0;

        // Get total
        for(var item in cart){
            displayCart.items.push(cart[item]);
            total += (cart[item].qty * cart[item].price);
        }
        
        displayCart.total = total;

        // Render Cart
        res.render('cart/index', {
            cart: displayCart
        });
    });
};
