const router = require("express").Router();

const isAuth = require("../utils/isAuth");

const {
  getAllCats,
  getOneCat,
  postAddCat,
  putEditCat,
  delCat,
} = require("../controllers/cats");

router.get("/", getAllCats);
router.get("/:catId", getOneCat);
router.post("/", isAuth, postAddCat);
router.put("/:catId", isAuth, putEditCat);
router.delete("/:catId", isAuth, delCat);

module.exports = router;
