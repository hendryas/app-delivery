const { driver, resto, customer, restodriver } = require('../models');

class DriverController {

    static async getDrivers(req, res) {
        let resultDriver = await driver.findAll({
            order: [
                ['id', 'desc']
            ],
            include: [
                { model: resto, through: { attributes: [] } }
            ]
        })
        resultDriver = resultDriver.map(driver => {
            let restoIds = driver.restos.map(resto => resto.dataValues.id)
            return {
                ...driver.dataValues,
                restos: driver.restos.map(resto => resto.dataValues),
                restoIds: restoIds
            }
        })
        let resultResto = await resto.findAll({});
        let resultCustomer = await customer.findAll({});
        // console.log(resultDriver[1]);
        // console.log(resultDriver.length);
        // res.json(resultDriver);
        res.render('driver/index.ejs', { title: 'Halaman Driver', dataDriver: resultDriver, dataCustomer: resultCustomer, dataResto: resultResto });
    }

    static async add(req, res) {
        const { nama, nid, kota, gender, resto_ids } = req.body;

        var restoIds = (typeof resto_ids === 'string') ? [resto_ids] : resto_ids // jika resto_ids adalah string maka dijadikan array, jika bukan yawes biarakan

        // console.log(restoIds);
        let resultDriver = await driver.create({
            nama: nama,
            nid: nid,
            kota: kota,
            gender: gender
        })
        if (!resultDriver) {
            res.redirect('/drivers'); // Gagal input
        }
        var data = restoIds.map(restoId => {
            return { restoId: restoId, driverId: resultDriver.id }
        })
        // console.log(data); // data berupa array yang berisi object dengan key driverId dan restoId
        await restodriver.bulkCreate(data)
        // res.json(resultDriver)
        res.redirect('/drivers');
    }

    static async edit(req, res) {
        const { nama, nid, kota, gender, resto_ids } = req.body;
        const id = +req.params.id;

        var restoIds = (typeof resto_ids === 'string') ? [resto_ids] : resto_ids // jika resto_ids adalah string maka dijadikan array, jika bukan yawes biarakan

        var deleteData = await restodriver.destroy({ where: { driverId: id } }) // hapus data yang berhubungan dengan driver yang akan diupdate

        let resultDriver = await driver.update({
            nama: nama,
            nid: nid,
            kota: kota,
            gender: gender
        }, { where: { id } })

        var data = restoIds.map(restoId => {
            return { restoId: restoId, driverId: id }
        })

        await restodriver.bulkCreate(data)
        // res.json(resultDriver)
        res.redirect('/drivers');
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;

            let resultDriver = await driver.destroy({
                where: { id }
            })

            let resultRestoDriver = await restodriver.destroy({
                where: {
                    driverId: id
                }
            })

            // res.json(resultDriver);
            res.redirect('/drivers');
        } catch (err) {
            res.json(err);
        }
    }
}

module.exports = DriverController;