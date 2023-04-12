import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import logoImg from "../../../assets/imagenes/Logo/Rick_and_Morty_Logo-transformed.png";
export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Link to="/home">
        <img src={logoImg} className={styles.logoImage} alt="Logo" />
      </Link>
    </div>
  );
}

