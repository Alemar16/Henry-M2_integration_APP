import React, { useRef } from "react"
import { useSelector, useDispatch } from "react-redux";
import Card from "../Targetas/Cards/Card/Card";
import styles from "./Favorites.module.css"
import { filterCards, orderCards } from "../Redux/actions";


const Favorites = () => {

  const favorites = useSelector((state) => state.myFavorites)

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value))
  }

   const handleFilter = (event) => {
     dispatch(filterCards(event.target.value));
   };
  const filter = useRef(null);
  const order = useRef(null);
  
  const handleReset = (e) => {
    dispatch({ type: "RESET" });
    document.getElementById("filterSelect").selectedIndex = 0;
    document.getElementById("orderSelect").selectedIndex = 0;
  };
  
  return (
    <div className={styles.background}>
      <h1 className={styles.titulo}>Mis Favoritos</h1>

      <div className={styles.selectores}>
        <select id="orderSelect" onChange={handleOrder}>
          <option value="order" disabled>
            Ordenar en
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Decendente">Descendente</option>
        </select>

        <select
          id="filterSelect"
          onChange={(event) => {
            if (event.target.value === "reset") {
              handleReset();
            } else {
              handleFilter(event);
            }
          }}
        >
          <option value="filter" disabled>
            Filtrar por
          </option>
          <option value="Male">Masculino</option>
          <option value="Female">Femenino</option>
          <option value="Genderless">Sin Genero</option>
          <option value="unknown">Desconocido</option>
          <option value="reset">Restablecer</option>
        </select>

    {/*  <button value="reset" onClick={handleReset}>
          Restablecer
        </button> */}
      </div>

      <div className={styles.container}>
        {favorites.map((fav) => (
          <Card key={fav.id} {...fav} isFavorite={true} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;

/* NOTA (opcion reset)
  El evento onChange llama a una función anónima que comprueba si la opción
  seleccionada es "reset". Si es así, se llama a la función handleReset. De lo
  contrario, se llama a la función handleFilter. */

