const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("example", "admin", "abc123", {
  host: "localhost",
  port: "3307",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

module.exports = sequelize;
