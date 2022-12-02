const bcrypt = require("bcrypt");

const User = require("../models/users");

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const dbUser = await User.findOne({ where: { email } });

    const passwordCorrect =
      dbUser == null ? false : await bcrypt.compare(password, dbUser.password);

    if (!passwordCorrect) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    req.session.isLoggedIn = true;
    req.session.user = {
      username: dbUser.username,
      firstName: dbUser.firstName,
      lastName: dbUser.lastName,
      email: dbUser.email,
    };

    return res.json({
      user: {
        username: dbUser.username,
        firstName: dbUser.firstName,
        lastName: dbUser.lastName,
        email: dbUser.email,
      },
      isLoggedIn: true,
    });
  } catch (error) {
    return next(error);
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

exports.postSignup = async (req, res, next) => {
  const { username, firstName, lastName, email, password, confirmPassword } =
    req.body;

  // Check password
  if (password !== confirmPassword) {
    return res.status(401).json({ error: "Password doesn't match" });
  }

  try {
    // Check if user is already in db via email
    let foundUser = await User.findOne({ where: { email } });
    if (foundUser) {
      return res
        .status(401)
        .json({ error: "There's already a user with that email" });
    }

    // Check if user is already in db via username
    foundUser = await User.findOne({ where: { username } });
    if (foundUser) {
      return res
        .status(401)
        .json({ error: "There's already a user with that username" });
    }

    // Check if username is valid
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      return res.status(401).json({
        error:
          "Invalid username. Username must contains only alphabetical characters and numbers",
      });
    }

    // encrypt password
    const hashedPassword = await bcrypt.hash(password, 12);

    await User.create({
      username,
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({ success: "User created" });
  } catch (error) {
    return next(error);
  }
};

exports.getRelog = (req, res) => {
  if (!req.session.isLoggedIn) {
    return res.json({
      data: "You aren't logged in. Please log in and try again.",
      isLoggedIn: false,
    });
  }
  return res.json({
    user: req.session.user,
    isLoggedIn: req.session.isLoggedIn,
  });
};
