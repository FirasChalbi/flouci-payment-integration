// Payemnt.js
const express = require('express');
const Add = require('../controllers/Payment');
const Router = express.Router();

Router.post('/payment', Add.Add); // Use Add.Add to reference the Add function in the exported object

module.exports = Router;
