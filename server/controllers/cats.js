const Cat = require("../models/cats");
const User = require("../models/users");

exports.getAllCats = async (req, res, next) => {
  try {
    const cats = await Cat.findAll({
      include: {
        model: User,
        attributes: { exclude: ["password", "createdAt", "updatedAt"] },
      },
    });
    res.json(cats);
  } catch (error) {
    next(error);
  }
};

exports.getOneCat = async (req, res, next) => {
  const { catId } = req.params;

  console.log(catId, typeof catId);

  try {
    const cat = await Cat.findOne({
      where: { catId },
      include: {
        model: User,
        attributes: { exclude: ["password", "createdAt", "updatedAt"] },
      },
    });
    res.json(cat);
  } catch (error) {
    next(error);
  }
};

exports.postAddCat = async (req, res, next) => {
  const { userId } = req.session.user;
  const { catName, catImgUrl } = req.body;

  try {
    const cat = await Cat.create({
      catName,
      catImgUrl,
      userId,
    });

    res.json(cat);
  } catch (error) {
    next(error);
  }
};

exports.putEditCat = async (req, res, next) => {
  const { userId } = req.session.user;
  const { catName, catImgUrl } = req.body;
  const { catId } = req.params;

  try {
    const [updatedRows] = await Cat.update(
      {
        catName,
        catImgUrl,
      },
      { where: { catId, userId } }
    );

    if (updatedRows === 0) {
      return res.status(401).json({ error: "Unable to update cat" });
    }
    return res.status(201).json({ success: "Updated cat" });
  } catch (error) {
    return next(error);
  }
};

exports.delCat = async (req, res, next) => {
  const { userId } = req.session.user;
  const { catId } = req.params;

  try {
    const deletedRows = await Cat.destroy({ where: { userId, catId } });

    if (deletedRows === 0) {
      return res.status(401).json({ error: "Unable to delete cat" });
    }
    return res.status(201).json({ success: "Deleted cat" });
  } catch (error) {
    return next(error);
  }
};
