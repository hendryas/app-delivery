'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class driver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.resto, { through: models.restodriver, foreignKey: 'driverId' })
    }
  }
  driver.init({
    nama: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Inputan Nama Driver Tidak Boleh Kosong!"
        }
      }
    },
    nid: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Inputan Nomor Induk Driver Tidak Boleh Kosong!"
        }
      }
    },
    kota: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Inputan Kota Driver Tidak Boleh Kosong!"
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Inputan Gender Driver Tidak Boleh Kosong!"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'driver',
  });
  return driver;
};