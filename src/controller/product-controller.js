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

exports.getAll = (req, res, next) => {
    Product.find().then( data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
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
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        });    
}

exports.getByTag = (req, res, next) => {
    console.log(req.params.tag);
    Product
    .find({
        tags: req.params.tag,
        active: true}, 
        'title description slug price')
    .then( data => {
        console.log(data);
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
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
   Product.findByIdAndUpdate(
       req.params.id,
       {
           $set: {
               title: req.body.title,
               description: req.body.description,
               price: req.body.price,
               tags: req.body.tags
           }
       })
       .then( x => {
           res.status(200).send({
               message: 'Produto actualizado com sucesso!',
               data: x
           });
       })
       .catch( e => {
       res.status(400).send({
          message: "Falha ao actualizar produto",
          data: e
       });
   });
};

exports.delete = (req, res, next) => {
    Product
        .findOneAndRemove( req.params.id)
        .then( x => {
            res.status(204).send({
                message: 'Produto removido com sucesso!'
            });
        })
        .catch( e => {
        res.status(400).send({
           message: "Falha ao removido produto"
        });
    });
 };