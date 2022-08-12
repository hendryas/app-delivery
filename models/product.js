'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.resto);
    }
  }
  product.init({
    nama: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Inputan Nama Product Tidak Boleh Kosong!"
        }
      }
    },
    harga: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Inputan Harga Product Tidak Boleh Kosong!"
        }
      }
    },
    restoId: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Inputan Nama Resto Tidak Boleh Kosong!"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};