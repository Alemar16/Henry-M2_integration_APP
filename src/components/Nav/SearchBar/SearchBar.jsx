import React, { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [id, setId] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setId(value);
  };

  const handleAddCharacter = () => {
    props.onSearch(id);
    setId("");
  };

  const handleRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1; // Genera un número aleatorio entre 1 y 671
    props.onSearch(randomId);
    setId("");
  };

  return (
    <div className={style.container}>
      <input
        type="search"
        placeholder="Escribe un ID"
        name="search"
        id=""
        onChange={handleChange}
        value={id}
      />
      <button onClick={handleAddCharacter}>Agregar</button>
      <button onClick={handleRandomCharacter}>Aleatorio</button>
    </div>
  );
}
