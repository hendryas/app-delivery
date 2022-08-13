const { product, resto } = require('../models');
const convertRupiah = require('rupiah-format');

class ProductController {
    static async getProducts(req, res) {
        try {
            let resultProduct = await product.findAll({
                order: [
                    ['id', 'desc']
                ],
                include: [resto]
            })

            let resultResto = await resto.findAll({})
            // res.json(resultProduct);
            res.render('product/index.ejs', { title: 'Halaman Product', dataProduct: resultProduct, dataResto: resultResto, convertRupiah })
        } catch (err) {
            res.json(err);
        }
    }

    static async add(req, res) {
        try {
            let { nama, harga, restoId } = req.body;
            let resultProduct = await product.create({
                nama, harga, restoId
            })
            // res.json(resultProduct);
            res.redirect('/products');
        } catch (err) {
            res.json(err);
        }
    }

    static async edit(req, res) {
        try {
            const id = +req.params.id;
            let { nama, harga, restoId } = req.body;
            console.log(typeof restoId);
            let resultProduct = await product.update({
                nama, harga, restoId
            }, {
                where: { id }
            })

            // res.json(resultProduct);
            res.redirect('/products');
        } catch (err) {
            res.render(err);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let resultProduct = await product.destroy({
                where: { id }
            })
            // res.json(resultProduct);
            res.redirect('/products');
        } catch (err) {
            res.json(err);
        }
    }
}

module.exports = ProductController;