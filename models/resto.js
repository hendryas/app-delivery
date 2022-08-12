'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class resto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.customer);
      this.hasMany(models.product, { foreignKey: 'restoId' });
      this.belongsToMany(models.driver, { through: models.restodriver, foreignKey: 'restoId' })
    }
  }
  resto.init({
    nama: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Inputan Nama Resto Tidak Boleh Kosong!"
        }
      }
    },
    alamat: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Inputan Alamat Resto Tidak Boleh Kosong!"
        }
      }
    },
    kota: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Inputan Kota Resto Tidak Boleh Kosong!"
        }
      }
    },
    customerId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Inputan Nama Customer Tidak Boleh Kosong!"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'resto',
  });
  return resto;
};