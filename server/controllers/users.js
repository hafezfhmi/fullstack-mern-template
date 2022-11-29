const User = require("../models/users");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.postAddUsers = async (req, res, next) => {
  const { username, firstName, lastName } = req.body;

  try {
    const user = await User.create({ username, firstName, lastName });
    res.json(user);
  } catch (error) {
    next(error);
  }
};
