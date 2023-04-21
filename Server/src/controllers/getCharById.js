//--------------------------#3-----------------------------------
//-------------------Con Async Await--------------------------
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(URL + id);
    const character = response.data;
    if (character.error) {
      res.status(200).json({ message: "Not Found" });
    } else {
      const { id, status, name, species, origin, image, gender } = character;
      res.json({ id, status, name, species, origin, image, gender });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = getCharById;

//------------------------------------------------------------
//-----------------------#2-------------------------------------
//------------Con Express y Con Promesas----------------------

/* const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const { id } = req.params;
  axios
    .get(URL + id)
    .then((response) => {
      const character = response.data;
      if (character.error) {
        res.status(404).json({ message: "Not Found" });
      } else {
        const { id, status, name, species, origin, image, gender } = character;
        res.json({ id, status, name, species, origin, image, gender });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: error.message });
    });
};

module.exports = getCharById; */

//-----------------------------------------------------------------
//-------------------------#1----------------------------------------
//-------------------Sin Express-----------------------------------

/* const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";
const getCharById = (res, id) => {
  axios
    .get(URL + id)
    .then((response) => {
        const {id, name, gender, species, origin, image, status} = response.data
        res.writeHead(200, {"Content-Type":"application/json"})
        // { id:1 } formato --> obj de JS
        // { "id": 1} formato --> JSON
        res.end(
          JSON.stringify({ id, name, gender, species, origin, image, status })
        );
    })
    .catch((reason) => {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(reason.message)
    });
};
module.exports = getCharById; */
