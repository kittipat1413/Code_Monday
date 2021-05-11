const cors = require("cors");
const express = require("express");
const routesV1 = require('../api/routes/v1');

/**
* Express instance
* @public
*/
const app = express();

//Middl(eware
app.use(cors());
app.use(express.json());

// mount api v1 routes
app.use('/', routesV1);

module.exports = app;