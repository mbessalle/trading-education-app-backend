'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "trades",
      [
        {
          userId: 1,
          executationTime: new Date(),
          BTCamount:0,
          USDamount: 5000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          executationTime: new Date(),
          BTCamount:1,
          USDamount: 3000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("trades", null, {});
  },
};
