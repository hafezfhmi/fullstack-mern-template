const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const LikeImage = sequelize.define(
  "likeImage",
  {
    userId: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    imageId: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
  },
  {
    freezeTableName: true,
  }
);

module.exports = LikeImage;
