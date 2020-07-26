'use strict';
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          firstname: "John",
          lastname: "Doe",
          username: "johndoe83",
          email: "joh@doe.com",
          password: bcrypt.hashSync("john1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstname: "joe",
          lastname: "johns",
          username: "jones82",
          email: "joh@doe.com",
          password: bcrypt.hashSync("jones1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
