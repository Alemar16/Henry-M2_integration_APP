import React, { useState } from "react";
import Logo from "./Logo/Logo";
import styles from "./Nav.module.css";
import NavBar from "./NavBar/NavBar.jsx";
import SearchBar from "./SearchBar/SearchBar";

export default function Nav(props) {
  const [hovered, setHovered] = useState(false);

  const handleLogOut = () => {
    props.logOut();
  };

  const buttonText = hovered ? "Adiós" : "Salir";

  return (
    <div className={styles.container}>
      <div className={`${styles.header} header`}>
        <Logo />
      </div>

      <div className={styles.centerSection}>
        <NavBar />
      </div>

      <div className={styles.rightSection}>
        <div>
          <SearchBar onSearch={props.onSearch} />
        </div>
      </div>

      <button
        className={styles.logOutButton}
        onClick={handleLogOut}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ width: "80px", alignItems: "center" }}
      >
        {buttonText}
      </button>
    </div>
  );
}
