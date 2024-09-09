const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

// Rutas CRUD para empresas
router.get('/', companyController.getAllCompanies);          // Obtener todas las empresas
router.post('/', companyController.createCompany);           // Crear una nueva empresa
router.get('/:id', companyController.getCompanyById);        // Obtener una empresa por ID
router.put('/:id', companyController.updateCompany);         // Actualizar una empresa
router.delete('/:id', companyController.deleteCompany);      // Eliminar una empresa

module.exports = router;