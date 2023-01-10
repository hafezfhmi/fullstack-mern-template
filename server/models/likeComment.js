const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const LikeComment = sequelize.define(
  "likeComment",
  {
    userId: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    commentId: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
  },
  {
    freezeTableName: true,
  }
);

module.exports = LikeComment;
