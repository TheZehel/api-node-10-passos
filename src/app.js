const express = require('express');
const app = express();
const Router = express.Router();

//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');

app.use('/', index);
app.use('/persons', personRoute);

module.exports = app;