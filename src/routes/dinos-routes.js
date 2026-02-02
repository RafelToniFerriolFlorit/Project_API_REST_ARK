var express = require('express');
var router = express.Router();

const criaturasController = require('../controllers/dinos-controller');

router.get('/todos', criaturasController.listaCriaturas);
module.exports = router;
