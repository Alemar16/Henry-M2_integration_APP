const User = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  try {
    if (!email || !password) res.status(400).json({ message: "Faltan Datos" });

    const user = await User.findOne({ where: { email } });

    if (!user) res.status(404).json({ message: "Usuario no encontrado." });

    // const passwordMatch = await User.findOne({ where: { password } })
    // if (!passwordMatch) res.status(403).json({ message: "Contraseña incorrecta." })
    if (user.password !== password) {
      return res.status(403).json({ message: "Contraseña incorrecta" });
    }
    res.status(200).json({ access: true });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = login;

