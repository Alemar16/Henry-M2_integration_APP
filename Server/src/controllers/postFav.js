const Favorite = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;
  if (!name || !origin || !status || !image || !species || !gender) {
    return res.status(401).json({ message: "Faltan datos" });
  }
  try {
    const [fav, created] = await Favorite.findOrCreate({
      where: { name },
      defaults: { origin, status, image, species, gender },
    });
    const favs = await Favorite.findAll();

    res.status(200).json(favs);
  } catch (error) {
    res.status(500).json(message.error);
  }
};

modules.exports = postFav;



/* const Favorite = require("../DB_connection");

const postFav = async (req, res) => {
    const { name, origin, status, image, species, gender } = req.body;
    if (!name || !origin || !status || !image || !species || !gender) {
        return res.status(401).json({ message: "Faltan datos" });
      }
    try {
        const [fav, created] = await Favorite.findOrCreate({
            where: {name},
            defaults: {origin, status, image, species, gender}
        });
        let favs;

        if(created){
            favs = await Favorite.findAll()
        }else{
            favs = [fav];
        }

        res.status(200).json(fav)
        
    } catch (error) {
        res.status(500).json(message.error)
    }
}

modules.exports = postFav; 
 */