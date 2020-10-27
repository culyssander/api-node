'use strict'

exports.get = (req, res, next) => {
    res.status(200).send('list of products...');
}

exports.post = (req, res, next) => {
    res.status(201).send(req.body);
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
