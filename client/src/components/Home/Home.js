import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemon } from "../../actions";
import PokemonCard from "../PokemonCard/PokemonCard";
import Filters from "../Filters/Filters";
import Pagination from "../Pagination/pagination";
import styles from "./Home.module.css";
import Logo from "../../images/catchemall.png";

const charactersPerPage = 12;

export default function Home() {
  const pokemon = useSelector((state) => state.pokemon);
  const [currentPage, setCurrentPage] = useState(1);
  // const [typeFilter, setTypeFilter] = useState([]);

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

  // const filterCurrentCharacters = (chars) => {
  //   if (typeFilter.length > 0) {
  //     console.log("chars", chars);
  //     return chars.filter((char) =>
  //       char?.types?.some((t) => typeFilter.includes(t))
  //     );
  //   } else {
  //     return chars;
  //   }
  // };

  return (
    <div className={styles.gridOuter}>
      <img className={styles.logo} src={Logo} alt="pokemonlogo" />
      <div className={styles.app}>
        <div className={styles.innerApp}>
          {pokemon?.pokemons?.length > 0 && (
            <Pagination
              charactersPerPage={charactersPerPage}
              pokemon={pokemon.pokemons.length}
              nextPage={nextPage}
            />
          )}
        </div>
        <Filters />
        {/* <Filters setTypeFilter={setTypeFilter} typeFilter={typeFilter} /> */}
        <div className={styles.cards}>
          {currentCharacters?.map((p) => {
            return (
              <PokemonCard
                id={p.id}
                key={p.id}
                name={p.name}
                image={p.image}
                types={p.types}
              />
            );
          })}
        </div>
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
    </div>
  );
}
