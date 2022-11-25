import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonByName } from "../../actions";

export default function SearchBar() {
  const pokemonName = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(getPokemonByName(pokemon));
        setPokemon("");
      }}
    >
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
