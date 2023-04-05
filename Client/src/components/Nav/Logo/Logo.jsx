import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link to="/home">
        <img
          src="/Rick_and_Morty_Logo-transformed.png"
          className={styles.logoImg}
          alt="Logo"
        />
      </Link>
    </div>
  );
}

