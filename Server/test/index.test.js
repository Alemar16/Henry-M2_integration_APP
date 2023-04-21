const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

//===============Testing Template=====================
describe("Test de RUTAS", () => {
  const character1 = { id: 1, name: "Armando" };
  const character2 = { id: 2, name: "Javier" };

  //================Test GET/.../.../:id=============
  describe("GET /rickandmorty/character/:id", () => {
    //===============Primer Test======================
    it("GET Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
    //==============Segundo Test======================
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const { body } = await agent.get("/rickandmorty/character/1");
      expect(body).toHaveProperty("id");
      expect(body).toHaveProperty("name");
      expect(body).toHaveProperty("species");
      expect(body).toHaveProperty("gender");
      expect(body).toHaveProperty("status");
      expect(body).toHaveProperty("origin");
      expect(body).toHaveProperty("image");
    });
    //================Tercer Test====================
    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/unmalid").expect(500);
    });
  });

  //================Test GET/.../login===============
  describe("GET /rickandmorty/login", () => {
    //===============Primer Test=======================
    it("validando el access, debe responder con false si las credenciales son incorrectas", async () => {
      const { body } = await agent.get(
        "/rickandmorty/login/?email=alemar.martinez16@gmail.com&password=123"
      );
      expect(body.access).toBe(false);
    });
  });

  //================Test POST/.../fav===============
  describe("POST /rickandmorty/fav", () => {
    //================Primer Test====================
    it("Debe responder con un array y el usuario que se manda por body", async () => {
      const { body } = await agent.post("/rickandmorty/fav").send(character1);
      expect(body).toBeInstanceOf(Array);
    });

    //=================Segundo Test=================
    it("Debe responder con un array y los usuarios que se mandaron por body", async () => {
      const { body } = await agent.post("/rickandmorty/fav").send(character2);
      expect(body).toContainEqual(character1);
      expect(body).toContainEqual(character2);
    });
  });

  //================Test DELETE/.../fav/:id==========
  describe("DELETE /rickandmorty/fav/:id", () => {
  
  //==============Primer Test=======================
    it("Si no encuentra un personaje para borrar, debe devolver todos los personajes", async () => {
      const { body } = await agent.delete("/rickandmorty/fav/3");
      expect(body).toContainEqual(character1);
      expect(body).toContainEqual(character2);
    });

  //=================Segundo Test===================
    it("Se elimina corractamente el personaje", async () => {
      const { body } = await agent.delete("/rickandmorty/fav/1");
      expect(body).not.toContainEqual(character1);
    });
  });
});

//======RESULTADOS EN LA CONSOLA===================
    /* GET /rickandmorty/character/:id                                                                                                                        
      √ GET Responde con status: 200 (946 ms)                                                                                                              
      √ Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image" (258 ms)                                   
      √ Si hay un error responde con status: 500 (1148 ms)                                                                                                 
    GET /rickandmorty/login                                                                                                                                
      √ validando el access, debe responder con false si las credenciales son incorrectas (259 ms)                                                         
    POST /rickandmorty/fav                                                                                                                                 
      √ Debe responder con un array y el usuario que se manda por body (293 ms)                                                                            
      √ Debe responder con un array y los usuarios que se mandaron por body (135 ms)                                                                       
    DELETE /rickandmorty/fav/:id                                                                                                                           
      √ Si no encuentra un personaje para borrar, debe devolver todos los personajes (61 ms)                                                               
      √ Se elimina corractamente el personaje (38 ms) */