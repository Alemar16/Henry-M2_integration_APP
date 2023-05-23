import React from "react";
import styles from "./HomeMessage.module.css";

function HomeMessage() {
  return (
    <div className={styles.homeMessageContainer}>
      <h3>Agrega un número ID...</h3>
    
      <p>Para traer una Tarjeta ó simplemente pulsa el Boton
      Aleatorio</p>
    </div>
  );
}

export default HomeMessage;


