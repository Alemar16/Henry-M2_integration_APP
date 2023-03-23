import React from "react";
import styles from "./Sinopsis.module.css";

const Sinopsis = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Rick and Morty</h1>
      <p className={styles.p}>
        Rick Sánchez es un ejemplo del típico "científico loco". Es un genio,
        pero es irresponsable, alcohólico, egoísta, un poco depresivo y con poca
        cordura.Rick por diferentes razones termina mudándose a la casa de su
        hija Beth y en ese momento se encuentra con su nieto Morty; un chico de
        14 años de edad, tímido y no muy listo.
        <p>
          Al juntarse con su nieto, Rick y Morty viven una variedad de aventuras
          a lo largo del cosmos y universos paralelos. Y es mediante tantas
          vivencias y reflexiones que Rick busca que su nieto Morty no acabe
          como su padre, Jerry, un hombre muy poco exitoso que a pesar de tener
          buenas intenciones resulta ser bastante inútil en muchas ocasiones y
          depende mucho de su esposa, Beth, hija de Rick.
        </p>
        <p>
          A pesar de estar muy apegados, Rick y su nieto experimentan momentos
          en los que Summer, hermana de Morty, se une en ocasiones a las
          pintorescas aventuras provocadas por Rick.
        </p>
      </p>

      <section>
        <h2>Información</h2>
        <h3>Titulo en Español</h3>
        <p>Rick y Morty</p>
        <h3>Creado por</h3>
        <p>Justin Roilan y Dan Harmon</p>
        <h3>Numero de Temporadas</h3>
        <p>6 temporadas / 61 Capitulos</p>
        <h3>Sitio Web Oficial</h3>
      </section>

      <section>
        <h2>Personajes Principales</h2>
        <div className={styles.imagen}>
          <img
            src="https://i.pinimg.com/736x/2c/31/af/2c31af5f036d820e31e60f1918fb0626.jpg"
            alt="Rick"
            width="300"
            height="200"
          />
          <img
            src="https://th.bing.com/th/id/R.c181f79c911aaba87515c8228ca0de6d?rik=FJG1sPvaw81bqA&riu=http%3a%2f%2fvignette4.wikia.nocookie.net%2frickandmorty%2fimages%2f4%2f41%2fMorty_Smith.jpg%2frevision%2flatest%3fcb%3d20170217193441&ehk=Sypuun0QVwJOf5Dfn%2fmIU9Z%2fvZKJ1kGeIm7ZChFA1UA%3d&risl=&pid=ImgRaw&r=0"
            alt="Morty"
            width="200"
            height="300"
          />
        </div>
      </section>
    </div>
  );
};
export default Sinopsis;
