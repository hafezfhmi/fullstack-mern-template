const router = require("express").Router();

const { getAllUsers, postAddUsers } = require("../controllers/users");

router.get("/", getAllUsers);
router.post("/", postAddUsers);

module.exports = router;
