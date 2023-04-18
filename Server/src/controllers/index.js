const getCharById = require("./getCharById");
const login = require("./login");
const { postFav, deleteFav } = require("./handleFavorites");

module.exports = {
  getCharById,
  login,
  postFav,
  deleteFav,
};
