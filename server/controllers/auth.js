const User = require("../models/users");

exports.postLogin = (req, res, next) => {
  try {
    // get user
    // check user.password and req.password
    // if true
    // set req.session.isLoggedIn = true
    // send user data
    // else return error
    req.session.isLoggedIn = true;
    res.json({ username: "johndoe" });
  } catch (error) {
    next(error);
  }
};

exports.postLogout = async (req, res, next) => {
  try {
    req.session.destroy(() => {
      res.end();
    });
  } catch (error) {
    next(error);
  }
};

// eslint-disable-next-line consistent-return
exports.postSignup = async (req, res, next) => {
  const { username, firstName, lastName, email, password, confirmPassword } =
    req.body;

  // Check password
  if (password !== confirmPassword) {
    return res.status("401").json({ error: "Password doesn't match" });
  }

  try {
    // Check if user is already in db via email
    let foundUser = await User.findOne({ where: { email } });
    if (foundUser) {
      return res
        .status("401")
        .json({ error: "There's already a user with that email" });
    }

    // Check if user is already in db via username
    foundUser = await User.findOne({ where: { username } });
    if (foundUser) {
      return res
        .status("401")
        .json({ error: "There's already a user with that username" });
    }

    // Check if username is valid
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      return res.status("401").json({
        error:
          "Invalid username. Username must contains only alphabetical characters and numbers",
      });
    }

    await User.create({
      username,
      firstName,
      lastName,
      email,
      password,
    });

    res.status("201").json({ success: "User created" });
  } catch (error) {
    next(error);
  }
};
