import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/Pokemon_logo.png";
import SearchBar from "../SearchBar/SearchBar";

export default function Navbar(onSearch) {
  return (
    <nav>
      <NavLink to="/home">
        <img
          id="logoPokemon"
          src={Logo}
          width="30"
          height="30"
          alt="Pokemon logo"
        />
      </NavLink>
      <NavLink to="/create">Crear Pokemon</NavLink>
      <SearchBar />
    </nav>
  );
}
