const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const PasswordReset = sequelize.define(
  "passwordReset",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    resetToken: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    expiry: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = PasswordReset;
