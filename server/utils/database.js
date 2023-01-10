const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("example", "admin", "abc123", {
  host: "localhost",
  port: "3307",
  dialect: "mysql",
});

module.exports = sequelize;
