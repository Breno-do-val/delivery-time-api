const express = require('express');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./../swagger_output.json');

const consultController = require('./controllers/ConsultController');

const routes = express.Router();

routes.post('/delivery-time', consultController.getDeliveryTime);

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));


module.exports = routes;