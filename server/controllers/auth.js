const crypto = require("crypto");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const { Op } = require("sequelize");

const User = require("../models/users");
const PasswordReset = require("../models/passwordResets");

// Setting up transporter using gmail: https://www.youtube.com/watch?v=thAP7Fvrql4
// P.S. Using gmail is not recommended for production. Find other alternative for production.
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_SECRETS,
  },
});

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

exports.postResetPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json("User not found");
    }

    const hashBuffer = crypto.randomBytes(32);
    const token = hashBuffer.toString("hex");

    const resetToken = await PasswordReset.findOne({
      where: { userId: user.userId },
    });

    if (resetToken) {
      const currentDate = new Date();
      const resetTokenExpiryLeft = Math.floor(
        (resetToken.expiry - currentDate) / 60000
      );

      if (resetTokenExpiryLeft > 0) {
        return res.status(400).json({
          error: `You had requested a password reset earlier. Please try again in ${resetTokenExpiryLeft} minutes.`,
        });
      }
      // Update token and return response
      await PasswordReset.update(
        {
          resetToken: token,
          expiry: Date.now() + 3600000,
        },
        { where: { userId: user.userId } }
      );
    } else {
      await PasswordReset.create({
        resetToken: token,
        expiry: Date.now() + 3600000,
        userId: user.userId,
      });
    }

    await transporter.sendMail({
      from: process.env.GMAIL_EMAIL,
      to: email,
      subject: "Password reset",
      text: `Here's your link to reset your password: http://localhost:3000/passwordReset/${token}`,
    });

    return res
      .status(201)
      .json({ message: "Reset link has been sent to your email" });
  } catch (error) {
    return next(error);
  }
};

exports.getOneResetPassword = async (req, res, next) => {
  const { resetToken } = req.params;

  try {
    const resetTokenDetails = await PasswordReset.findOne({
      where: {
        resetToken,
        expiry: {
          [Op.gt]: new Date(),
        },
      },
    });

    if (!resetTokenDetails) {
      return res.status(401).json({ error: "Invalid token" });
    }

    return res.status(200).json({ success: "Token valid" });
  } catch (error) {
    return next(error);
  }
};

exports.postNewPassword = async (req, res, next) => {
  const { resetToken } = req.params;
  const { password, confirmPassword } = req.body;

  try {
    const resetTokenDetails = await PasswordReset.findOne({
      where: {
        resetToken,
        expiry: {
          [Op.gt]: new Date(),
        },
      },
    });

    if (!resetTokenDetails) {
      return res.status(401).json({ error: "Invalid token" });
    }

    // Check password
    if (password !== confirmPassword) {
      return res.status(401).json({ error: "Password doesn't match" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    // TODO: Transaction update and delete below
    await User.update(
      {
        password: hashedPassword,
      },
      {
        where: {
          userId: resetTokenDetails.userId,
        },
      }
    );

    await PasswordReset.destroy({
      where: {
        resetToken,
      },
    });

    return res.status(201).json({ success: "Password updated" });
  } catch (error) {
    return next(error);
  }
};
