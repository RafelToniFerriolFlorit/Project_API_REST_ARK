var express = require('express');
var router = express.Router();

const criaturasController = require('../controllers/dinos-controller.js');
router.get('/todos', criaturasController.listaCriaturas);
module.exports = router;

const criaturasID = require('../controllers/dinos-controller.js');
router.get('/:id', criaturasID.getCriaturaID);
module.exports = router;

const categoriaDinos = require('../controllers/dinos-controller.js');
router.get('', categoriaDinos.filtroCriaturas);
module.exports = router;
