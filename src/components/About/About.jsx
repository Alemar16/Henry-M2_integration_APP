import React from "react";
import styles from "./About.module.css";
const About = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h1}>
        Bienvenidos a mi primer Single Page Application
      </h2>
      <p className={styles.p}>
        En esta App utilice los conocimientos adquiridos en SoyHenry durante el
        Modulo 2 con React Framework
      </p>

      <section>
        <h2>Información personal</h2>
        <p>Nombre: Armando Martínez</p>
        <p>Edad: 40 años</p>
        <p>Ubicación: Ciudad de Cordoba, Argentina</p>
        <p>Correo electrónico: alemar.martinez16@gmail.com</p>
      </section>
      <section>
        <h2>Redes sociales</h2>
        <div className={styles.socialLinks}>
          <a
            href="https://twitter.com/mi-cuenta-de-twitter"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/armando-martínez-zambrano-51a714247"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Alemar16/APP-Rick-and-Morty.git"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
};
export default About;