const express = require('express');
const bodyParser = require('body-parser');
const users_details = require('./dynamo/users_details');
const validaciones = require('./helper/validate');

const app = express();
app.use(bodyParser.json());

app.get('/landing', function(req, res) {
    console.log('Redirect a Landing');
});

app.post('/landing/subscriptions', async (req, res) => {
    let mensaje = {};
    let valid = true;
    
    let rutValidado = validaciones.validarRut(req.body.rut ? req.body.rut : '');
    if(!rutValidado.status){
        res.send({
            status: 400,
            messege: "Debe ingresar un rut Valido."
        });
        valid = false;
    }

    let EmailValidado = validaciones.validarEmail(req.body.email ? req.body.email : '')
    if(!EmailValidado.status && valid){
        res.send({
            status: 400,
            messege: "Debe ingresar un correo electrónico Valido."
        });
        valid = false;
    }
    
    if((!req.body.nombre || req.body.nombre === '') && valid){
        res.send({
            status: 400,
            messege: "Debe ingresar el nombre del Usuario."
        });
        valid = false;
    }

    if((!req.body.telefono || req.body.telefono === '') && valid){
        res.send({
            status: 400,
            messege: "Debe ingresar el telefono del Usuario."
        });
        valid = false;
    }
    
    if(valid){
        let UsuarioData = {
            rut: rutValidado.rut,
            email: req.body.email,
            nombre: req.body.nombre,
            telefono: req.body.telefono,
        };

        let respuesta = await users_details.saveUser(UsuarioData);
        if(respuesta){
            mensaje = {
                status: 201,
                messege: "Nuevo Usuario registrado."
            }
        }else{
            mensaje = {
                status: 400
            }
        }
        res.send(mensaje);
    }
    
});

app.get('/landing/user/:id', async (req, res) => {
    let mensaje = {};
    let data = await users_details.getUserByRut(req.params.id);
    if(!data || data.Count == 0){
        mensaje = {
            status: 401,
            messege: "No se encontro usuario registrado con ese Rut"
        };
    }else{
        mensaje = {
            status: 200,
            messege: "Usuario encontrado",
            data: {
                "Nombre": data.Items[0].user_name,
                "Rut": data.Items[0].user_rut,
                "Telefono": data.Items[0].user_phone,
                "Correo": data.Items[0].user_email
            }
        };
    }
    res.send(mensaje);
});

app.listen("3000");