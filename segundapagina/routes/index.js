var express = require('express');
var router = express.Router();
var db = require('../config/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/libros',(req, res, next) => {
  const sql = 'SELECT * FROM libros';
  db.query(sql, (error, resultados) => {
    if (error){
      console.log('Error en la consulta', error );
    }
    res.render('libros', {libros : resultados});
    //res.json(resultados);
  } );
 
});

router.get('/formLibro',  function(req, res, next){
res.render('formulario');
});

module.exports = router;
