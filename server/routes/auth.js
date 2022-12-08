const router = require("express").Router();

const {
  postLogin,
  postLogout,
  postSignup,
  getRelog,
  postResetPassword,
  getOneResetPassword,
  postNewPassword,
} = require("../controllers/auth");
const isAuth = require("../middleware/isAuth");

router.post("/login", postLogin);
router.post("/logout", isAuth, postLogout);
router.post("/signup", postSignup);
router.get("/relog", getRelog);
router.post("/resetPassword", postResetPassword);
router.get("/resetPassword/:resetToken", getOneResetPassword);
router.post("/resetPassword/:resetToken", postNewPassword);

module.exports = router;
