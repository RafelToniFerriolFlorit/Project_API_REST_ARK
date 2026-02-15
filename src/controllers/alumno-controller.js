const Alumno = require('../models/alumno');

exports.calculate = async (req, res) => {

    const input = req.body;
    const resultado = [];

    // 1️⃣ Crear alumnos y calcular media
    for (let i = 0; i < input.length; i++) {

        const a = new Alumno(
            input[i].name,
            input[i].surname,
            input[i].age,
            input[i].grades
        );

        let suma = 0;

        for (let j = 0; j < a.grades.length; j++) {
            suma += a.grades[j];
        }

        let media = Math.round(suma / a.grades.length);

        resultado.push({
            name: a.name,
            surname: a.surname,
            finalMark: media
        });
    }

    for (let i = 0; i < resultado.length - 1; i++) {
        for (let j = 0; j < resultado.length - i - 1; j++) {

            if (resultado[j].surname > resultado[j + 1].surname) {
                let temp = resultado[j];
                resultado[j] = resultado[j + 1];
                resultado[j + 1] = temp;
            }
        }
    }

    const salidaFinal = [];

    for (let i = 0; i < resultado.length; i++) {
        salidaFinal.push({
            student: resultado[i].surname + ", " + resultado[i].name,
            finalMark: resultado[i].finalMark
        });
    }

    return res.json(salidaFinal);
};
