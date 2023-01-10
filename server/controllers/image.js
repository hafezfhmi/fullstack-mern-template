const Image = require("../models/image");

exports.postImage = async (req, res, next) => {
  try {
    const { title, description, imageUrl } = req.body;

    const createdImage = await Image.create({
      title,
      description,
      imageUrl,
      userId: req.session.user.id,
    });

    res.status(201).json(createdImage);
  } catch (error) {
    next(error);
  }
};
