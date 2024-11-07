var express = require('express');
var router = express.Router();
var db = require('../config/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/libros',(req, res, next) => {
  const sql = 'SELECT * FROM libros';

});

module.exports = router;
