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

router.post('/nuevoLibro', (req, res, next) => {
  console.log(req.body);
  //const titulo = req.body.titulo;
  //const autor = req.body.autor;
  const {titulo, autor} = req.body;
  const sql = "INSERT INTO libros(titulo, autor) VALUES ( ? , ? )";
  db.query(sql, [titulo, autor], (err, result) => {
    if (err){
      console.error("error al guardar libro en base de datos", err);
      return res.status(500).send("Error al guardar");
    }else {
      res.render('creado', {nuevo : {
        id: result.insertId,
        titulo : titulo,
        autor: autor
      } });
    }

  } );
});

router.get('/detallelibro', (req, res, next) => {
  //recuperar datos de la lista http://localhost:3000/detalleLibro?id=7
  const libroId = req.query.id;
  //validación
  sql = "SELECT * FROM libros WHERE id= " + libroId;
  db.query(sql,(error, resultado) => {
    if(error){
      console.log(error);
    }else{
      res.render('detalle', {libro:resultado[0] });
    }
  });

});

module.exports = router;
