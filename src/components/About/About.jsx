import React, { useState } from "react";
import styles from "./About.module.css";

const About = () => {
  const [selected, setSelected] = useState("welcome");

  const handleClick = (section) => {
    setSelected(section);
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.card}>
          <h2 className={styles.title}>
            Bienvenidos a mi primer Single Page Application
          </h2>

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
              Redes Sociales
            </button>
          </div>
        </div>
      </div>
      {selected === "personal" && (
        <div className={styles.card}>
          <h2 className={styles.subtitle}>Información Personal</h2>
          <p className={styles.text}>
            En esta App utilicé los conocimientos adquiridos en Soy Henry
            durante el Modulo 2 con React Framework
          </p>
          <ul className={styles.list1}>
            <li className={styles.item}>
              <strong>Nombre:</strong> Armando Martínez
            </li>
            <li className={styles.item}>
              <strong>Ubicación:</strong> Córdoba, Argentina.
            </li>
            <li className={styles.item}>
              <strong>Correo electrónico:</strong>alemar.martinez16@gmail.com
            </li>
          </ul>
        </div>
      )}
      {selected === "projects" && (
        <div className={styles.card}>
          <h2 className={styles.subtitle}>Proyectos</h2>
          <ul className={styles.list2}>
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
          <h2 className={styles.subtitle}>Redes Sociales</h2>
          <ul className={styles.list3}>
            <li>
              <a
                href="https://www.linkedin.com/in/armando-martinez/"
                target="_blank"
                rel="noreferrer"
                className={styles.iten}
              >
                <svg
                  xmlns="
http://www.w3.org/2000/svg
"
                  width="25"
                  height="25"
                  background-color="red"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/alemar16"
                target="_blank"
                className={styles.iten}
                rel="noreferrer"
              >
                Github
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className={styles.iten}
              >
                Twitter
              </a>
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
              rel="noreferrer"</a></li>
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
