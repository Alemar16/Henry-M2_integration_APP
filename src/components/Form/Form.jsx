//---C O D I G O   C O N   L O G I N G  ----------------

/* import styles from "./Form.module.css";
import { useState } from "react";
import { validate } from "./validation";
import logo from "../../assets/imagenes/Logo/Rick_and_Morty_Logo-transformed.png";

export default function Form(props) {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(
      validate({
        ...userData,
        [name]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className={styles.Background}>
      <div className={styles.loginBox}>
        <img
          src={logo}
          className={styles.avatar}
          alt="Avatar_Image"
        />
        <h1 classmna={styles.inicia_seccion}></h1> 
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <label htmlFor="userName">Usuario</label>
          <input
            type="text"
            placeholder="Ingresa Usuario"
            value={userData.userName}
            name="userName"
            onChange={handleChange}
            className={errors.userName && styles.warning}
          />
          {errors.userName ? (
            <p style={{ color: "red" }}>{errors.userName}</p>
          ) : null}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={userData.password}
            name="password"
            onChange={handleChange}
            className={errors.password && styles.warning}
          />
          {errors.password ? (
            <p style={{ color: "red" }}>{errors.password}</p>
          ) : null}
          <input type="submit" value="Iniciar Sección" />
         
        </form>
      </div>
    </div>
  );
}




 */




//---C O D I G O   S I N   L O G I N G  ----------------

import styles from "./Form.module.css";
import { useState } from "react";
//import { validate } from "./validation";
import logo from "../../assets/imagenes/Logo/Rick_and_Morty_Logo-transformed.png";
import { useNavigate } from "react-router-dom";

export default function Form(props) {
  const navigate = useNavigate();

  const handleGoToForm = () => {
    navigate("/home");
  }

  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    userName: "",
    password: "",
  });

  /*  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(
      validate({
        ...userData,
        [name]: value,
      })
    );
  }; */

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className={styles.Background}>
      <div className={styles.loginBox}>
        <img src={logo} className={styles.avatar} alt="Avatar_Image" />
        {/* <h1 classmna={styles.inicia_seccion}>Inicia Seccion</h1> */}
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <label htmlFor="userName"></label>
          {/* <input
            type="text"
            placeholder="Ingresa Usuario"
            value={userData.userName}
            name="userName"
            onChange={handleChange}
            className={errors.userName && styles.warning}
          /> */}
          {errors.userName ? (
            <p style={{ color: "red" }}>{errors.userName}</p>
          ) : null}
          <label htmlFor="password"></label>
          {/* <input
            type="password"
            placeholder="Enter Password"
            value={userData.password}
            name="password"
            onChange={handleChange}
            className={errors.password && styles.warning}
          /> */}
          {errors.password ? (
            <p style={{ color: "red" }}>{errors.password}</p>
          ) : null}
          {/* <input type="submit" value="Iniciar Sección" /> */}
          <button className={styles["card-button"]} onClick={handleGoToForm}>
            Bienvenidos
          </button>
        </form>
      </div>
    </div>
  );
}