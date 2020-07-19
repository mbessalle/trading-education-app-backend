'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      trade.belongsTo(models.user);
    }
  };
  trade.init({
    executionTime: DataTypes.DATE,
    BTCamount: DataTypes.FLOAT,
    USDamount: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'trade',
  });
  return trade;
};