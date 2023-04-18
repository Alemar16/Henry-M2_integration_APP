const users = require("../utils/users");
const login = (req, res) => {
  const { email, password } = req.query; //obtener los datos mediante .query
  console.log(email, password);
  //user==> []
  //con el .find / primero que matchea
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    res.status(200).json({ access: true }); //responde, permite la entrada
  } else {
    res.status(200).json({ access: false }); //responde, pero no da la entrada
  }
};

module.exports = login;
