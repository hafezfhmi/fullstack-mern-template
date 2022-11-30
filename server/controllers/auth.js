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
