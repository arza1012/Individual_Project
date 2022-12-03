import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/mystique.png";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.outerNav}>
      <Link to="/home">
        <img
          id="logoPokemon"
          src={Logo}
          width="40"
          height="40"
          alt="Pokemon logo"
        />
      </Link>
      <div className={styles.innerNav}>
        <Link className={styles.home} to="/home">
          Home
        </Link>
        <Link className={styles.create} to="/create">
          Create New Pokemon
        </Link>
        <SearchBar className={styles.searchbar} />
      </div>
    </nav>
  );
}
