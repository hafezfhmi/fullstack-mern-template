const router = require("express").Router();

const { postImage } = require("../controllers/image");
const isAuth = require("../utils/isAuth");

router.post("/", isAuth, postImage);

module.exports = router;
