'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     user.belongsToMany(models.course, {through: 'usercourses', foreignKey: "userId",})
    }
  };
  user.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    BTCbalance: DataTypes.INTEGER,
    USDbalance: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};