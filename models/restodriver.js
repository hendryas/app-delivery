'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class restodriver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.resto);
      this.belongsTo(models.driver);
    }
  }
  restodriver.init({
    restoId: DataTypes.INTEGER,
    driverId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'restodriver',
  });
  return restodriver;
};