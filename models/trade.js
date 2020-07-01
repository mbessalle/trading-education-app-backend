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
      // define association here
    }
  };
  trade.init({
    executationtime: DataTypes.DATE,
    BTCamount: DataTypes.INTEGER,
    USDamount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'trade',
  });
  return trade;
};