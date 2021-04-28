const express = require('express');

const consultController = require('./controllers/ConsultController');

const routes = express.Router();

routes.get('/delivery-time', consultController.getDeliveryTime);

module.exports = routes;