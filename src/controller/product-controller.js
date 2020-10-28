'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    res.status(200).send('list of products...');
}

exports.post = (req, res, next) => {
    var product = new Product(req.body);
    product
        .save()
        .then(x => {
            res.status(201).send({
                message: 'Produto cadastraado com sucesso!',
                data: product
            });
        })
        .catch(e => {
            res.status(400).send({
                message: 'Falha ao cadastrar o producto',
                data: e
            });
        });
    
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    const id = req.params.id;
    console.log('delentado sobre o id: ' + id);
    res.status(204).send();
};
