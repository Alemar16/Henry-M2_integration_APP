import React from "react";
import styles from "./Sinopsis.module.css";

const Sinopsis = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebarLeft}>
        <div className={styles.sidebarImage}>
          <img
            src="https://media0.giphy.com/media/3o7TKqGAZAbdKoaxu8/giphy.gif?cid=ecf05e47f2ni0ilrry3cry3lvz6es90cuvbrhh2huk3153cs&rid=giphy.gif&ct=g"
            alt="Left Sidebar Image 1"
            className={styles.image}
          />
          <img
            src="https://media1.giphy.com/media/uZrLs0rcNc9sA/giphy.gif?cid=ecf05e479hz4o4bpjwfpx35ndaeldm3l3voey5pksl9j1aii&rid=giphy.gif&ct=g"
            alt="Left Sidebar Image 2"
            className={styles.image}
          />
          <img
            src="https://media4.giphy.com/media/3oEduHUtBvTIIBosJq/giphy.gif?cid=ecf05e47816v0fcaeokyavhr6msp8mouwpi9yh5m48ce6be8&rid=giphy.gif&ct=g"
            alt="Left Sidebar Image 3"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.mainContent}>
        <h1 className={styles.titulo_sinopsis}>Rick and Morty</h1>
        <div className={styles.content}>
          <div className={styles.summary}>
            <p className={styles.p}>
              Rick Sánchez es un ejemplo del típico "científico loco". Es un
              genio, pero es irresponsable, alcohólico, egoísta, un poco
              depresivo y con poca cordura. Rick por diferentes razones termina
              mudándose a la casa de su hija Beth y en ese momento se encuentra
              con su nieto Morty; un chico de 14 años de edad, tímido y no muy
              listo.
            </p>
            <p className={styles.p}>
              Al juntarse con su nieto, Rick y Morty viven una variedad de
              aventuras, muchas de las cuales involucran viajes
              interdimensionales y extraterrestres. Rick es un abuelo muy poco
              convencional, pero al final del día, siempre se preocupa por Morty
              y su familia.
            </p>
          </div>
        </div>
        <div className={styles.details}>
          <h2 className={styles.h2}>Información</h2>
          <ul className={styles.list}>
            <li>
              <span>Creado por:</span> Justin Roilan y Dan Harmon
            </li>
            <li>
              <span>Numero de Temporadas:</span> 6 temporadas / 61 Capitulos
            </li>
          </ul>
          <a
            href="https://www.adultswim.com/videos/rick-and-morty/"
            className={styles.link} 
          >
            Sitio Web Oficial
          </a>
        </div>
      </div>
      <div className={styles.sidebarRight}>
        <div className={styles.sidebarImage}>
          <img
            src="https://media4.giphy.com/media/3o85xFUjFFIGxIy7fO/giphy.gif?cid=ecf05e476j1a9aov47iwnunquk60prfczcgvusyf107rq296&rid=giphy.gif&ct=g"
            alt="Right Sidebar Image 1"
            className={styles.image}
          />
          <img
            src="https://media1.giphy.com/media/l378BzHA5FwWFXVSg/giphy.gif?cid=ecf05e47uo9nr0pl8eh2uq82mss7g4fedbfqpkln5yyamhuu&rid=giphy.gif&ct=g"
            alt="Right Sidebar Image 2"
            className={styles.image}
          />
          <img
            src="https://media3.giphy.com/media/oYMxbPiBVlVII/giphy.gif?cid=ecf05e477j3fr13e8772kfc5mz18wu2b8absv2emanqe29y8&rid=giphy.gif&ct=g"
            alt="Right Sidebar Image 3"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Sinopsis;
