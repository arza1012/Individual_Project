import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../actions";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState("");

  const navigate = useNavigate();

  const selectPokemon = async (e) => {
    e.preventDefault();
    await dispatch(getPokemonByName(pokemon));
    navigate(`/home/${pokemon}`);
    setPokemon("");
  };

  return (
    <form onSubmit={selectPokemon}>
      <input
        type="text"
        placeholder="Buscar Pokemon..."
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}
      />
      <input type="submit" value="Buscar" />
    </form>
  );
}
