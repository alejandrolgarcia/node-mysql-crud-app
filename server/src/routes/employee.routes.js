const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee.controller');

// get all employees
router.get('/', employeeController.findAll);

// find by Id
router.get('/:id', employeeController.findById);

// create a nuew employee
router.post('/', employeeController.create);

// update
router.put('/:id', employeeController.update);

// delete
router.delete('/:id', employeeController.delete);


module.exports = router;