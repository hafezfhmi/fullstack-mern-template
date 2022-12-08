module.exports = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res
      .status(401)
      .json({ error: "You aren't logged in. Please log in and try again." });
  }
  return next();
};
