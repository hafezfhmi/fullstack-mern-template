const router = require("express").Router();

const { postLogin } = require("../controllers/auth");

router.post("/login", postLogin);

module.exports = router;
