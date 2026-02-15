const express = require('express');
const router = express.Router();

const controller = require('../controllers/alumno-controller.js'); // ajusta el nombre
router.post('/calculate', controller.calculate);
module.exports = router;
