const { resto, customer, product } = require('../models');

class RestoController {
    static async getRestos(req, res) {
        try {
            let resultResto = await resto.findAll({
                order: [
                    ['id', 'desc']
                ],
                include: [customer]
            })

            let resultCustomer = await customer.findAll({})

            // res.json(resultProduct);
            res.render('resto/index.ejs', { title: 'Halaman Resto', dataResto: resultResto, dataCustomer: resultCustomer })
        } catch (err) {
            res.json(err);
        }
    }

    static async add(req, res) {
        try {
            let { nama, alamat, kota, customerId } = req.body;
            let resultResto = await resto.create({
                nama: nama,
                alamat: alamat,
                kota: kota,
                customerId: +customerId
            })
            // res.json(resultResto);
            res.redirect('/restos');
        } catch (err) {
            res.json(err);
        }
    }

    static async edit(req, res) {
        try {
            const id = +req.params.id;
            let { nama, alamat, kota, customerId } = req.body;

            let resultResto = await resto.update({
                nama, alamat, kota, customerId
            }, {
                where: { id }
            })

            // res.json(resultResto);
            res.redirect('/restos');
        } catch (err) {
            res.json(err);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let resultResto = await resto.destroy({
                where: { id }
            })
            // res.json(resultResto);
            res.redirect('/restos');
        } catch (err) {
            res.json(err);
        }
    }

    static async info(req, res) {
        try {
            const id = +req.params.id;

            let resultResto = await resto.findOne({
                where: { id }
            })

            let resultProduct = await product.findAll({
                where: {
                    restoId: id
                }
            })

            // res.json(resultProduct);
            res.render('resto/infoResto.ejs', { title: 'Info Resto Product', dataProduct: resultProduct, dataResto: resultResto });
        } catch (err) {
            res.json(err);
        }
    }
}

module.exports = RestoController;