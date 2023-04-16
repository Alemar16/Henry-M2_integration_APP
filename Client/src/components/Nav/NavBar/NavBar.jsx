import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavbarLink = ({ to, children, ...props }) => {
  return (
    <NavLink
      {...props}
      to={to}
      className={styles.navbarLink}
      activeclassname={styles.active}
      inactivecassname={styles.disable}
    >
      {children}
    </NavLink>
  );
};

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <NavbarLink to="/home">Inicio</NavbarLink>
      <NavbarLink to="/sinopsis">Sinopsis</NavbarLink>
      <NavbarLink to="/favorites">Favoritos</NavbarLink>
      <NavbarLink to="/about">Acerca de Mi</NavbarLink>
    </div>
  );
}
