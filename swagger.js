const swaggerAutogen = require('swagger-autogen')();
require('dotenv').config();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/routes.js'];

const doc = {
    info: {
        version: "1.0.0",
        title: "Rest API for consulting delivery time",
        description: "This API gets the information from a SOAP web service from Correios."
    },
    host: `localhost:${process.env.API_PORT}`,
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "DeliveryTime",
            "description": "Endpoint for consulting delivery time"
        }
    ],
    securityDefinitions: {
        api_key: {
            type: "apiKey",
            name: "api_key",
            in: "header"
        },
        petstore_auth: {
            type: "oauth2",
            authorizationUrl: "https://petstore.swagger.io/oauth/authorize",
            flow: "implicit",
            scopes: {
                read_pets: "read your pets",
                write_pets: "modify pets in your account"
            }
        }
    },
    definitions: {
        GetDeliveryTime: {
            codigo: "",
            cepOrigin: "",
            cepDest: ""
        }
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./src/app');           // Your project's root file
})