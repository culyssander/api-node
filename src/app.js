'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

// Conecta ao banco
mongoose.connect('mongodb://localhost:27017/culysoft', { useNewUrlParser: true, useUnifiedTopology: true, 
useCreateIndex: true, useFindAndModify: false} );

const app = express();

const product = require('./models/product-model')

const indexRoute = require('./routes/index-route');
const productsRouter = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoute);
app.use('/products', productsRouter);

module.exports = app