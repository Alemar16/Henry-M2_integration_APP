const favorite = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;
  const { idUser } = req.query;
  try {
    const fav = await Favorite.findOne({ where: { id } });

    await fav.removeUser(idUser);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
module.exports = deleteFav;
