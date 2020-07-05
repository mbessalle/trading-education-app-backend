'use strict';
const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "courses",
      [
        {
          name: "first trading video",
          description: "trading 101",
          videoURL: "https://www.dummytradevideos.ch",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "second trading video",
          description: "trading 102",
          videoURL: "https://www.dummytradevideos.ch",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "third trading video",
          description: "trading 103",
          videoURL: "https://www.dummytradevideos.ch",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "fourth trading video",
          description: "trading 104",
          videoURL: "https://www.dummytradevideos.ch",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("courses", null, {});
  },
};
