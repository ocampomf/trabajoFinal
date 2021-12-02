var express = require('express');
var router = express.Router();
var apiCancionesController = require('../../controllers/api/apiCancionesController') 


// MOSTRAR TODAS LAS CANCIONES
router.get('/canciones', apiCancionesController.all)


// CREAR NUEVA CANCION
router.post('/canciones', apiCancionesController.create)


// MOSTRAR UNA CANCION
router.get('/canciones/:id', apiCancionesController.mostrarUna)


// EDITAR UNA CANCION
router.put('/canciones/:id', apiCancionesController.edit)


// ELIMINAR UNA CANCION
router.delete('/canciones/:id', apiCancionesController.delete)


// TODOS LOS GENEROS CON SUS CANCIONES
router.get('/generos/', apiCancionesController.mostrarGeneroCancion)


module.exports = router;