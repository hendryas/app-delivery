'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.resto, { foreignKey: 'customerId' });
    }
  }
  customer.init({
    nama: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Inputan Nama Customer Tidak Boleh Kosong!"
        }
      }
    },
    umur: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Inputan Umur Tidak Boleh Kosong!"
        }
      }
    },
    image: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function (customer, option) {
        customer.image = "https://mpng.subpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg"
      }
    },
    sequelize,
    modelName: 'customer',
  });
  return customer;
};