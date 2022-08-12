const route = require('express').Router();

route.get('/', (req, res) => {
    res.render('home/index.ejs', { title: 'Main Page' });
})

const costumerRoutes = require('./customer');
const driverRoutes = require('./driver');
const productRoutes = require('./product');
const restoRoutes = require('./resto');
const resto_to_driver = require('./resto_to_driver');

route.use('/customers', costumerRoutes);
route.use('/drivers', driverRoutes);
route.use('/products', productRoutes);
route.use('/restos', restoRoutes);
// route.use('/restodrivers', resto_to_driver);

module.exports = route;
