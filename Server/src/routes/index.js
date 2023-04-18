const { Router } = require("express");
const {
  getCharById,
  login,
  postFav,
  deleteFav,
} = require("../controllers/index");
const router = Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
