import React from "react";
import Card from "./Card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;

  return (
    <div className={styles.container}>
      {characters.map((char) => (
        <Card
          key={char.name}
          id={char.id}
          name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
          onCloseCard={() => props.onCloseCard(char.id)}
        />
      ))}
    </div>
  );
}
