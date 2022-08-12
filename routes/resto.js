const restoRoute = require('express').Router();
const { RestoController } = require('../controller');

restoRoute.get('/', RestoController.getRestos);
restoRoute.post('/add', RestoController.add);
restoRoute.post('/edit/:id', RestoController.edit);
restoRoute.get('/delete/:id', RestoController.delete);
restoRoute.get('/info/:id', RestoController.info);

module.exports = restoRoute;