import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemon } from "../../actions";
import PokemonCard from "../PokemonCard/PokemonCard";
import Pagination from "../Pagination/pagination";
import { Link } from "react-router-dom";

const charactersPerPage = 12;

export default function Home() {
  const pokemon = useSelector((state) => state.pokemon);
  const [currentPage, setCurrentPage] = useState(1);
  const indexLastCharacter = currentPage * charactersPerPage;
  const indexFistCharacter = indexLastCharacter - charactersPerPage;
  const currentCharacters =
    pokemon.pokemons.length > 1
      ? pokemon.pokemons.slice(indexFistCharacter, indexLastCharacter)
      : [pokemon.pokemons];

  const dispatch = useDispatch();
  useEffect(() => {
    const getPokemon = async () => {
      await dispatch(getAllPokemon());
    };
    getPokemon();
  }, [dispatch]);

  const nextPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div>
        {pokemon?.pokemons?.length > 0 && (
          <Pagination
            charactersPerPage={charactersPerPage}
            pokemon={pokemon.pokemons.length}
            nextPage={nextPage}
          />
        )}
      </div>
      {currentCharacters?.map((p) => {
        return (
          <Link to={`/home/${p.id}`}>
            <PokemonCard
              id={p.id}
              key={p.id}
              name={p.name}
              image={p.image}
              types={p.types}
            />
          </Link>
        );
      })}
      <div>
        {pokemon?.pokemons?.length > 0 && (
          <Pagination
            charactersPerPage={charactersPerPage}
            pokemon={pokemon.pokemons.length}
            nextPage={nextPage}
          />
        )}
      </div>
    </div>
  );
}
