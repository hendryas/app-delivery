const productRoute = require('express').Router();
const { ProductController } = require('../controller');

productRoute.get('/', ProductController.getProducts);
productRoute.post('/add', ProductController.add);
productRoute.post('/edit/:id', ProductController.edit);
productRoute.get('/delete/:id', ProductController.delete);

module.exports = productRoute;