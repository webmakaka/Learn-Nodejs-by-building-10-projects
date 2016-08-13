var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: '172.17.0.2',
  user: 'root',
  password: 'root',
  database: 'portfolio'
});

connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM projects', function(err, rows, fields){
    if(err) throw err;
    res.render('index', {
      "rows": rows
    });
  });
});

module.exports = router;
