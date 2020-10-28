'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    Product.find({active: true}, 'title slug price').
    then( x => {
        res.status(200).send(x);
    }).catch(e => {
        res.status(400).send({ data: e });
    });
}

exports.getById = (req, res, next) => {
    Product.findById(req.params.id)
    .then( x => {
        res.status(200).send(x);
    })
    .catch( e => {
        res.status(400).send(e);
    });
};

exports.getBySlug = (req, res, next) => {
    Product.findOne({
            slug: req.params.slug,
            active: true
        }, 'title slug price tags')
        .then(x => {
            res.status(200).send(x);
        })
        .catch(e => {
            res.status(400).send(e);
        });    
}

exports.getByTag = (req, res, next) => {
    console.log(req.params.tag);
    Product.find({
        tag: req.params.tag,
        active: true}, 
        'title description slug price').
    then( x => {
        res.status(200).send(x);
    }).catch(e => {
        res.status(400).send({ data: e });
    });
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
