const express = require('express');

const consultController = require('./controllers/ConsultController');

const routes = express.Router();

routes.post('/delivery-time', consultController.getDeliveryTime);

module.exports = routes;