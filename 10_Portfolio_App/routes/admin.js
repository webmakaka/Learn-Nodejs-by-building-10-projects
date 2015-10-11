var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: '172.17.0.2',
  user: 'root',
  pasword: 'root',
  database: 'portfolio'
});

connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM projects', function(err, rows, fields){
    if(err) throw err;
    res.render('dashboard', {
      "rows": rows,
      layout: 'layout2'
    });
  });
});

module.exports = router;
