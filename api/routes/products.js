const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');

router.get('/', productController.get_products);

router.post('/', productController.post_product);

module.exports = router;