const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");
const User = require("./users");

const Cat = sequelize.define("Cat", {
  catId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  catName: { type: DataTypes.STRING },
  catImgUrl: { type: DataTypes.STRING },
  userId: { type: DataTypes.INTEGER },
});

User.hasMany(Cat, { foreignKey: "userId" });
Cat.belongsTo(User, {
  onDelete: "CASCADE",
  foreignKey: "userId",
});

module.exports = Cat;
