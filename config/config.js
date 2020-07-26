require("dotenv").config();

module.exports = {
  development: {
    url: process.env.DATABASE_DEV,
    operatorsAliases: "0",
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    url: process.env.DATABASE_DEV,
    use_env_variable: "DATABASE_DEV",
    operatorsAliases: "0",
    dialect: "postgres",
  },
};
