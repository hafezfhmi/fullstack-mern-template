const router = require("express").Router();

const { postLogin, postLogout, postSignup } = require("../controllers/auth");
const isAuth = require("../middleware/isAuth");

router.post("/login", postLogin);
router.post("/logout", isAuth, postLogout);
router.post("/signup", postSignup);

module.exports = router;
