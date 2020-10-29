'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controller/product-controller')

router.get('/', controller.get);

router.get('/all/details', controller.getAll);

router.get('/:id', controller.getById);

router.get('/slug/:slug', controller.getBySlug);

router.get('/tags/:tag', controller.getByTag);

router.post('/', controller.post);

router.put('/:id', controller.put);

router.delete('/:id', controller.delete);

module.exports = router;