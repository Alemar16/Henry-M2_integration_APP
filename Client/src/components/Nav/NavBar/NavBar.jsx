import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom"

const NavLinkMe = ({ to, children, ...props }) => {
  return (
    <NavLink
      {...props}
      to={to}
      className={({ isActive }) => (isActive ? styles.active : styles.disable)}
    >
      {children}
    </NavLink>
  );
};

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <NavLink to="/home" className={styles.opcion}>Inicio</NavLink>
      <NavLink to="/sinopsis" className={styles.opcion}>Sinopsis</NavLink>
      <NavLink to="/favorites" className={styles.opcion}>Favoritos</NavLink>
      <NavLink to="/about" className={styles.opcion}>Acerca de Mi</NavLink>
    </div>
  );
}

