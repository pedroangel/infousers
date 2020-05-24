const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
    region: 'us-east-2',
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const table_name = process.env.TABLE_USERS_DETAILS;
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.getUserByRut = (rut) => {
    return new Promise((resolve, reject) => {
        var parametros = {
            TableName: table_name,
            KeyConditionExpression: 'user_rut = :user_rut',
            ExpressionAttributeValues: {
            ':user_rut': rut
            }
        };

        dynamoDB.query(parametros, function(err, data){
            if(err) reject;
            else resolve(data)
        });
    });
}

exports.saveUser = (data) => {
    return new Promise((resolve, reject) => {
        var parametros = {
            TableName: table_name,
            Item: {
                "user_email": data.email,
                "user_name": data.nombre,
                "user_phone": data.telefono,
                "user_rut": data.rut
            }
        };

        dynamoDB.put(parametros, function(err, data){
            if(err) reject;
            else resolve(data)
        });
    });
}

