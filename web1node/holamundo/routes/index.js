var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Web 1 ico FES Aragon' });
});

router.get('/ico', function(req,res,next){
  res.render('formulario', {titulo: 'Ejemplo'} );
});

router.post('/procesa', function(req, res, next){
  res.render('resultado', {contenido: ok})
});
module.exports = router;
