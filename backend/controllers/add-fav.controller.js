const { addFavouriteService } = require("../service");
exports.addFav = async (req, res) => {
  try {
    const { Userid, recipieid } = req.body;
    const oneLike = await addFavouriteService.pushInLike(Userid, recipieid);
    res
      .status(200)
      .json({ message: "successfully added in Like table", oneLike });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: error.message });
  }
};
