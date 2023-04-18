require("dotenv").config();
const { PASSWORD } = process.env;
const users = [{ email: "alemar.martinez16@gmail.com", password: PASSWORD }];
module.exports = users;

//se crea un entorno seguro, donde se pueden guardar credenciales, llaves y contraseñas y cuando se hace "git push" se sueve todo el repositorio menos este Archivo ".env"
//hay que agregarlo en un "git-ignore"