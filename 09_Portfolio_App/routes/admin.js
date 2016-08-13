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

router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM projects', function(err, rows, fields){
    if(err) throw err;
    res.render('dashboard', {
      "rows": rows,
      layout: 'layout2'
    });
  });
});

router.get('/new', function(req, res, next) {
  res.render('new');
});


// Add New Project
router.post('/new', function(req, res, next){

        var title       = req.body.title;
        var description = req.body.description;
        var service     = req.body.service;
        var client      = req.body.client;
        var projectdate = req.body.projectdate;

    // Check Image

    if(req.files.projectimage){

        var projectImageOriginalName = req.files.projectimage.originalname;
        var projectImageName         = req.files.projectimage.name;
        var projectImageMime         = req.files.projectimage.mimetype;
        var projectImagePath         = req.files.projectimage.path;
        var projectImageExt          = req.files.projectimage.extension;
        var projectImageSize         = req.files.projectimage.size;

    } else {
        var projectImageName = 'noimage.jpg';
    }

    // Form Field Validation
    req.checkBody('title', 'Title field is required').notEmpty();
    req.checkBody('service', 'Service field is required').notEmpty();

    var errors = req.validationErrors();

    if(errors){
      res.render('new', {
        errors: errors,
        title: title,
        description: description,
        service: service,
        client: client
      });
    } else {
        var project= {
          title: title,
          description: description,
          service: service,
          client: client,
          date: projectdate,
          image: projectImageName
        };

        var query = connection.query('INSERT INTO projects SET ?', project, function(err, result){
            // Project Inserted

        });

        req.flash('success', 'Project Added');

        res.location('/admin');
        res.redirect('/admin');

    }
});

// SHOW EDIT FORM
router.get('/edit/:id', function(req, res, next) {
  connection.query('SELECT * FROM projects WHERE id ='+req.params.id, function(err, row, fields){
    if(err) throw err;
    res.render('edit', {
      "row": row[0],
      layout: 'layout2'
    });
  });
});


// Update Project
router.post('/edit/:id', function(req, res, next){

        var title       = req.body.title;
        var description = req.body.description;
        var service     = req.body.service;
        var client      = req.body.client;
        var projectdate = req.body.projectdate;

    // Check Image

    if(req.files.projectimage){

        var projectImageOriginalName = req.files.projectimage.originalname;
        var projectImageName         = req.files.projectimage.name;
        var projectImageMime         = req.files.projectimage.mimetype;
        var projectImagePath         = req.files.projectimage.path;
        var projectImageExt          = req.files.projectimage.extension;
        var projectImageSize         = req.files.projectimage.size;

    } else {
        var projectImageName = 'noimage.jpg';
    }

    // Form Field Validation
    req.checkBody('title', 'Title field is required').notEmpty();
    req.checkBody('service', 'Service field is required').notEmpty();

    var errors = req.validationErrors();

    if(errors){
      res.render('new', {
        errors: errors,
        title: title,
        description: description,
        service: service,
        client: client
      });
    } else {
        var project= {
          title: title,
          description: description,
          service: service,
          client: client,
          date: projectdate,
          image: projectImageName
        };

        var query = connection.query('UPDATE projects SET ? WHERE id ='+req.params.id, project, function(err, result){
            // Project Inserted

        });

        req.flash('success', 'Project Updated');

        res.location('/admin');
        res.redirect('/admin');

    }
});


router.delete('/delete/:id', function(req, res){
    connection.query('DELETE FROM projects WHERE id='+req.params.id, function(err, results){
        if(err) throw err;
    });

    req.flash('success', 'Project Deleted');
    res.location('/admin');
    res.redirect('/admin');

});

module.exports = router;
