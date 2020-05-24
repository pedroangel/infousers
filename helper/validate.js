const ValidatorRut = require('chilean-rut');
const validatorEmail = require("email-validator");
 
exports.validarRut = (rut) => {
    let rutProcesado = rut.split(".").join("");

    return ({
        status: ValidatorRut.validate(rutProcesado),
        rut: rutProcesado
    });
}

exports.validarEmail = (email) => {
    return ({
        status: validatorEmail.validate(email)
    });
}
