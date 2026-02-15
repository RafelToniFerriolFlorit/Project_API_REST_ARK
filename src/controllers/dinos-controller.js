const Dinousario = require('../models/dinosaurio');
const dinosJSON = require ('../data/creatures.json');

exports.listaCriaturas = async (req, res) => {
    const criaturas = [];

    for (let i = 0; i < dinosJSON.length; i++) {
        const criatura =  new Dinousario(
            dinosJSON[i].id,
            dinosJSON[i].t,
            dinosJSON[i].cid,
            dinosJSON[i].cat
        );
        criaturas.push(criatura);
    }
    return res.json(criaturas);
}

exports.getCriaturaID = async (req, res) => {
    for (let i = 0; i < dinosJSON.length; i++) {
        const dino =  new Dinousario(
            dinosJSON[i].id,
            dinosJSON[i].t,
            dinosJSON[i].cid,
            dinosJSON[i].cat,

        );

        if (dino.id == req.params.id) {
            return res.json(dino);
        }
    }

}

exports.filtroCriaturas = async (req, res) => {

    let arrayDino = []

    let filtroDinos = req.query.categoria
    for (let i = 0; i < dinosJSON.length; i++) {
        let P = new Dinousario(
            dinosJSON[i].id,
            dinosJSON[i].t,
            dinosJSON[i].cid,
            dinosJSON[i].cat,
        )

        if(filtroDinos !== undefined) {
            if(P.categoria === filtroDinos) {
                arrayDino.push(P)
            }

        } else {
            arrayDino.push(P)
        }
    }

    return res.json(arrayDino)
}

