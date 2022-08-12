const driverRoute = require('express').Router();
const { DriverController } = require('../controller');

driverRoute.get('/', DriverController.getDrivers);
driverRoute.post('/add', DriverController.add);
driverRoute.post('/edit/:id', DriverController.edit);
driverRoute.get('/delete/:id', DriverController.delete);

module.exports = driverRoute;