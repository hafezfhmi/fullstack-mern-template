const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");
const User = require("./users");

const PasswordReset = sequelize.define("PasswordReset", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  resetToken: {
    type: DataTypes.STRING,
  },
  expiry: {
    type: DataTypes.DATE,
  },
  userId: {
    type: DataTypes.INTEGER,
    unique: true,
  },
});

PasswordReset.belongsTo(User, {
  onDelete: "CASCADE",
  foreignKey: "userId",
});
User.hasOne(PasswordReset, { foreignKey: "userId" });

module.exports = PasswordReset;
