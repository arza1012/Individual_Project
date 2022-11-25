import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail } from "../../actions";
import { Link, useParams } from "react-router-dom";

export default function PokemonDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const pokemon = useSelector((state) => state.pokemon.pokemons);
  useEffect(() => {
    const pokemonDetails = async () => {
      dispatch(getPokemonDetail(id));
    };
    pokemonDetails();
  }, [dispatch, id]);

  if (pokemon) {
    return (
      <div>
        <h1>Soy {pokemon.name}!</h1>
        <p>#{pokemon.id}</p>
        <img src={pokemon.image} alt={pokemon.name} />
        <p>Type: {pokemon.types}</p>
        <p>Base Stats</p>
        <p>hp: {pokemon.hp}</p>
        <p>attack: {pokemon.attack}</p>
        <p>defense: {pokemon.defense}</p>
        <p>speed: {pokemon.speed}</p>
        <p>height: {pokemon.height} cm</p>
        <p>weight: {pokemon.weight} kg</p>
        <Link to="/home">
          <button>Back</button>
        </Link>
      </div>
    );
  } else {
    return <> </>;
  }
}
