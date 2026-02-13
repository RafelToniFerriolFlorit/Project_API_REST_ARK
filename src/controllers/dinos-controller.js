const Dinousario = require('../models/dinosaurio');
const dinosJSON = require ('../data/creatures.json');

exports.listaCriaturas = async (req, res) => {
    const criaturas = [];

    for (let i = 0; i < dinosJSON.length; i++) {
        const criatura =  new Dinousario(dinosJSON[i].t,dinosJSON[i].cid,dinosJSON[i].cat);
        criaturas.push(criatura);
    }
    return res.json(criaturas);
}
