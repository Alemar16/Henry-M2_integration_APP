import React, { useState } from "react";
import styles from "./About.module.css";

const About = () => {
  const [selected, setSelected] = useState("welcome");

  const handleClick = (section) => {
    setSelected(section);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>
          Bienvenidos a mi primer Single Page Application
        </h2>
        <p className={styles.text}>
          En esta App utilice los conocimientos adquiridos en{" "}
          <a
            href="https://www.soyhenry.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Soy Henry
          </a>{" "}
          durante el Modulo 2 con React Framework
        </p>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button} ${
              selected === "personal" ? styles.active : ""
            }`}
            onClick={() => handleClick("personal")}
          >
            Información Personal
          </button>
          <button
            className={`${styles.button} ${
              selected === "projects" ? styles.active : ""
            }`}
            onClick={() => handleClick("projects")}
          >
            Proyectos
          </button>
          <button
            className={`${styles.button} ${
              selected === "skills" ? styles.active : ""
            }`}
            onClick={() => handleClick("skills")}
          >
            Habilidades
          </button>
        </div>
      </div>
      {selected === "personal" && (
        <div className={styles.card}>
          <h2 className={styles.subtitle}>Información Personal</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              <strong>Nombre:</strong> Juan Pérez
            </li>
            <li className={styles.item}>
              <strong>Edad:</strong> 30 años
            </li>
            <li className={styles.item}>
              <strong>Correo electrónico:</strong> juanperez@gmail.com
            </li>
          </ul>
        </div>
      )}
      {selected === "projects" && (
        <div className={styles.card}>
          <h2 className={styles.subtitle}>Proyectos</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              <strong>Proyecto 1:</strong> Desarrollo de una aplicación web con
              React
            </li>
            <li className={styles.item}>
              <strong>Proyecto 2:</strong> Creación de un sistema de gestión de
              inventarios con Node.js
            </li>
            <li className={styles.item}>
              <strong>Proyecto 3:</strong> Desarrollo de una aplicación móvil
              con React Native
            </li>
          </ul>
        </div>
      )}
      {selected === "skills" && (
        <div className={styles.card}>
          <h2 className={styles.subtitle}>Habilidades</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              <strong>Frontend:</strong> HTML, CSS, JavaScript, React
            </li>
            <li className={styles.item}>
              <strong>Backend:</strong> Node.js, Express, MongoDB
            </li>
            <li className={styles.item}>
              <strong>Otras habilidades:</strong> Diseño gráfico, UI/UX design
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default About;

/* import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>
          Bienvenidos a mi primer Single Page Application
        </h2>
        <p className={styles.text}>
          En esta App utilice los conocimientos adquiridos en{" "}
          <a
            href="https://www.soyhenry.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Soy Henry
          </a>{" "}
          durante el Modulo 2 con React Framework
        </p>
      </div>
      <div className={styles.card}>
        <h2 className={styles.subtitle}>Información Personal</h2>
        <ul className={styles.list}>
          <li>
            <span className={styles.item}>Nombre: </span>Armando Martínez
          </li>
          <li>
            <span className={styles.item}>Ubicación: </span>Córdoba, Argentina
          </li>
          <li>
            <span className={styles.item}>Correo electrónico: </span>
            alemar.martinez16@gmail.com
          </li>
        </ul>
      </div>
      <div className={styles.card}>
        <h2 className={styles.subtitle}>Proyectos de Soy Henry</h2>
        <div className={styles.logoContainer}>
          <img
            src="https://www.soyhenry.com/static/media/logo-soyhenry.ee5e9e7b.svg"
            alt="Logo de Soy Henry"
            className={styles.logo}
          />
          <button className={styles.button}>Ver proyectos</button>
        </div>
      </div>
      <div className={styles.card}>
        <h2 className={styles.subtitle}>Redes Sociales</h2>
        <ul className={styles.social}>
          <li>
            <a
              href="https://www.linkedin.com/in/armando-martinez/"
              target="_blank"
              rel="noreferrer"
              className={styles.icon}
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/alemarmar"
              target="_blank"
              rel="noreferrer"
              className={styles.icon}
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/alemarmar"
              target="_blank"
              rel="noreferrer"
              className={styles.icon}
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About; */

/* import React from "react";
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
        <section className={styles.section}>
          <h2>Información personal</h2>
          <ul className={styles.infoList}>
            <li>Nombre: Armando Martínez</li>
            <li>Ubicación: Ciudad de Córdoba, Argentina</li>
            <li>Correo electrónico: alemar.martinez16@gmail.com</li>
          </ul>
        </section>
      <div className={styles.sectionsContainer}>
        <section className={styles.section}>
          <h2>Proyectos de Soy Henry</h2>
          <div className={styles.logo}>
            <img src="ruta/a/tu/imagen/logo.png" alt="Logo de Soy Henry" />
          </div>
          <div className={styles.button}>
            <a
              href="ruta/a/tu/componente/proyectos.jsx"
              className={styles.link}
            >
              Ver proyectos
            </a>
          </div>
        </section>
        <section className={styles.section}>
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
    </div>
  );
};

export default About; */
