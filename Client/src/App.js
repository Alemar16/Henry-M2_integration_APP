import "./App.css";
import { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Titulo from "./components/Titulo/Titulo";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Cards from "./components/Targetas/Cards/Cards";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Sinopsis from "./components/Sinopsis/Sinopsis";
import Form from "./components/Form/Form";
import Error404 from "./components/Error404/Error404";
import { Navigate } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";


function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [access, setAccess] = useState(false);
  const userName = "alemar.martinez16@gmail.com";
  const password = "123";

  function onSearch(character) {
    const characterId = parseInt(character);
    if (isNaN(characterId)) {
      setError("Por favor ingresa un valor numérico.");
      return;
    }
    if (characters.some((char) => char.id === characterId)) {
      setError(`El personaje con ID ${characterId} ya está mostrado.`);
      return;
    }

    fetch(`http://localhost:3001/rickandmorty/character/${characterId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          setError(null);
        } else {
          setError(`No existe un personaje con el ID ${characterId}`);
        }
      });
  }

  function handleCloseCard(id) {
    setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
  }

  const login = (userData) => {
    // {userName : "alemar.martinez16@gmail.com", password: "123"}
    if (userData.userName === userName && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("El usuario o la contraseña no son correctos.");
    }
  };
  const logOut = () => {
    access && setAccess(false);
    navigate("/");
  };

/*   useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]); */

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} />}
      {error && <ErrorMessage message={error} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/sinopsis" element={<Sinopsis />} />
        <Route
          path="/home"
          element={
            <>
              <Titulo />
              <Cards onCloseCard={handleCloseCard} characters={characters} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />

        <Route path="*" element={<Error404 />} />
        
      </Routes>
    </div>
  );
}

export default App;


