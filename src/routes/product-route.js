'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controller/product-controller')

const get = router.get('/', controller.get);

const create = router.post('/', controller.post);

const update = router.put('/:id', controller.put);

const del = router.delete('/:id', controller.delete);

module.exports = router;