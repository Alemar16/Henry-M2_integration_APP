//Usando (Express)
const express = require("express");
const server = express();
const PORT = 3001;
const router = require("./routes/index");
const { conn } = require("./DB_connection"); 

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server raised in port: 
http://localhost
: ${PORT}`);
  });
});







//middleware .use y sus acciones(header)
/* server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");

  next();
});


server.use(express.json());//middleware
server.use("/rickandmorty", router);//middleware

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
}); */

//---------------------------------------------------------------------------
// usando (HTTP) con createServer
/* const http = require("http");
const getCharById = require("./controllers/getCharById");
const PORT = 3001;
http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(req.url);
    try {
      const { url } = req;
      if (url.includes("/rickandmorty/character")) {
        const id = url.split("/").at(-1);
        console.log(id)
        getCharById(res, id);
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  })
  .listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
  }); */
