module.exports = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.status(401).json({ error: "You don't have the access." });
  }

  return next();
};
