import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/mystique.png";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Navbar.module.css";

export default function Navbar(onSearch) {
  return (
    <nav className={styles.outerNav}>
      <NavLink to="/home">
        <img
          id="logoPokemon"
          src={Logo}
          width="40"
          height="40"
          alt="Pokemon logo"
        />
      </NavLink>
      <div className={styles.innerNav}>
        <NavLink className={styles.home} to="/home">
          Home
        </NavLink>
        <NavLink className={styles.create} to="/create">
          Create New Pokemon
        </NavLink>
        <SearchBar className={styles.searchbar} />
      </div>
    </nav>
  );
}
