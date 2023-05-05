const getCharById = require("./getCharById");
const login = require("./login");
const postUser = require("./postUser");
const postFav = require("./postFav");
const deleteFav = require("./deleteFav");

module.exports = {
  getCharById,
  login,
  postFav,
  deleteFav,
  postUser,
};

/* const getCharById = require("./getCharById");
const login = require("./login");
const { postFav, deleteFav } = require("./handleFavorites");

module.exports = {
  getCharById,
  login,
  postFav,
  deleteFav,
  postUser,
};
 */
