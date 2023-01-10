const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const Comment = sequelize.define(
  "comment",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    detail: { type: DataTypes.TEXT, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    imageId: { type: DataTypes.INTEGER, allowNull: false },
    parentCommentId: { type: DataTypes.INTEGER },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Comment;
