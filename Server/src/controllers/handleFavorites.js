let myFavorites = [];

//agrega en tu arreglo: el personaje que estas recibiendo
const postFav = (req, res) => {
  myFavorites.push(req.body);
  res.json(myFavorites);
};

//filtra a tus personajes favoritos y elimina aquel que tiene el mismo id que recibes por params
const deleteFav = (req, res) => {
  const { id } = req.params;
  myFavorites = myFavorites.filter((fav) => fav.id !== parseInt(id));
  res.json(myFavorites);
};

module.exports = { postFav, deleteFav };
