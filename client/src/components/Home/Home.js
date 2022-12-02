import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemon, clearSelectedPokemon } from "../../actions";
import PokemonCard from "../PokemonCard/PokemonCard";
import Filters from "../Filters/Filters";
import Pagination from "../Pagination/pagination";
import styles from "./Home.module.css";
import Logo from "../../images/catchemall.png";

const charactersPerPage = 12;

export default function Home() {
  const pokemon = useSelector((state) => state.pokemon);
  const selectedPokemon = useSelector((state) => state.selectedPokemon);
  console.log("selectedPokemon", selectedPokemon);

  const [currentPage, setCurrentPage] = useState(1);
  const [typeFilter, setTypeFilter] = useState([]);
  const [createdByUser, setCreatedByUser] = useState([]);
  const [sortedByAlph, setSortedByAlph] = useState([]);
  const [sortedByAttack, setSortedByAttack] = useState([]);

  const indexLastCharacter = currentPage * charactersPerPage;
  const indexFistCharacter = indexLastCharacter - charactersPerPage;

  const dispatch = useDispatch();

  useEffect(() => {
    const getPokemon = async () => {
      await dispatch(getAllPokemon());
    };
    getPokemon();
  }, [dispatch]);

  useEffect(() => {
    if (selectedPokemon.id) {
      dispatch(clearSelectedPokemon());
    }
  }, [dispatch, selectedPokemon]);

  const nextPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filterCurrentCharacters = (chars) => {
    return chars.filter((char) => {
      if (typeFilter.length > 0) {
        if (
          !typeFilter.includes("Select") &&
          !char?.types?.some((t) => typeFilter.includes(t))
        ) {
          return false;
        }
      }
      if (createdByUser.length > 0) {
        if (!createdByUser.includes(char.createdByUser)) {
          return false;
        }
      }
      if (sortedByAlph.length > 0) {
        if (sortedByAlph.includes("Ascendant")) {
          chars.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });
        } else if (sortedByAlph.includes("Descendant")) {
          chars.sort(function (a, b) {
            if (a.name > b.name) {
              return -1;
            }
            if (a.name < b.name) {
              return 1;
            }
            return 0;
          });
        }
      }
      if (sortedByAttack.length > 0) {
        if (sortedByAttack.includes("Ascendant")) {
          chars.sort(function (a, b) {
            console.log("chars", chars);
            if (a.attack > b.attack) {
              return 1;
            }
            if (a.attack < b.attack) {
              return -1;
            }
            return 0;
          });
        } else if (sortedByAttack.includes("Descendant")) {
          chars.sort(function (a, b) {
            if (a.attack > b.attack) {
              return -1;
            }
            if (a.attack < b.attack) {
              return 1;
            }
            return 0;
          });
        }
      }
      return true;
    });
  };

  const currentCharacters =
    pokemon.pokemons.length > 1
      ? filterCurrentCharacters(pokemon.pokemons).slice(
          indexFistCharacter,
          indexLastCharacter
        )
      : [pokemon.pokemons];

  return (
    <div className={styles.gridOuter}>
      <img className={styles.logo} src={Logo} alt="pokemonlogo" />
      <div className={styles.app}>
        <Filters
          setTypeFilter={setTypeFilter}
          setCreatedByUser={setCreatedByUser}
          setSortedByAlph={setSortedByAlph}
          setSortedByAttack={setSortedByAttack}
        />
        <div className={styles.innerApp}>
          {pokemon.pokemons.length ? (
            <Pagination
              charactersPerPage={charactersPerPage}
              pokemonLength={filterCurrentCharacters(pokemon?.pokemons).length}
              nextPage={nextPage}
            />
          ) : null}
        </div>
        <div className={styles.cards}>
          {currentCharacters?.map((p, index) => (
            <PokemonCard
              id={p.id}
              key={index}
              name={p.name}
              image={p.image}
              types={
                !p.createdByUser
                  ? p.types?.map((t) => t + "  ")
                  : p.types?.map((type) => type.name + "  ")
              }
              attack={p.attack}
            />
          ))}
        </div>
        <div className={styles.innerApp}>
          {pokemon.pokemons.length ? (
            <Pagination
              charactersPerPage={charactersPerPage}
              pokemonLength={filterCurrentCharacters(pokemon?.pokemons).length}
              nextPage={nextPage}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
