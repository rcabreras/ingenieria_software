const express = require('express');
const router = express.Router();
const graduateController = require('../controllers/graduateController');

// Rutas CRUD para egresados
router.get('/', graduateController.getAllGraduates);          // Obtener todos los egresados
router.post('/', graduateController.createGraduate);           // Crear un nuevo egresado
router.get('/:id', graduateController.getGraduateById);        // Obtener un egresado por ID
router.put('/:id', graduateController.updateGraduate);         // Actualizar un egresado
router.delete('/:id', graduateController.deleteGraduate);      // Eliminar un egresado

module.exports = router;