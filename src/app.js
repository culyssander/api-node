'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const router = express.Router();


const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

const update = router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
});

const del = router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    console.log('delentado sobre o id: ' + id);
    res.status(204).send();
});

app.use('/', route);
app.use('/', create);
app.use('/', update);
app.use('/', del)

module.exports = app