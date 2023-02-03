import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail } from "../../actions";
import { Link, useParams, useNavigate } from "react-router-dom";
import styles from "./Details.module.css";
import pokeball from "../../images/pokeball.png";
import loadLogo from "../../images/gifpokeball.gif";

export default function PokemonDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pokemon = useSelector((state) => state.selectedPokemon);
  useEffect(() => {
    if (pokemon === "Pokemon no encontrado") {
      navigate("/notfound");
    }
    setLoading(true);
    if (pokemon.id) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      return;
    }
    const pokemonDetails = async () => {
      dispatch(getPokemonDetail(id));
    };
    pokemonDetails();
  }, [dispatch, id, pokemon, navigate]);

  return (
    <div className={styles.container}>
      {loading ? (
        <img src={loadLogo} alt="loading" />
      ) : (
        <div className={styles.outerDetails}>
          <div className={styles.details}>
            <div className={styles.title}>
              <div className={styles.name}>{pokemon.name}</div>
              <div className={styles.id}>
                <p>#{pokemon.id}</p>
              </div>
            </div>
            <div className={styles.outerImage}>
              <img
                className={styles.image}
                src={pokemon.image ? pokemon.image : pokeball}
                alt={pokemon.name}
              />
            </div>
            <div className={styles.description}>
              <div className={styles.subtitle}>Pokemon Type:</div>
              <div className={styles.each}>
                {!pokemon.createdByUser
                  ? pokemon.types?.map((t) => t + " ")
                  : pokemon.types?.map((type) => type.name + " ")}
              </div>
              <div className={styles.subtitle}>Base Stats</div>
              <div className={styles.each}>hp: {pokemon.hp}</div>
              <div className={styles.each}>attack: {pokemon.attack}</div>
              <div className={styles.each}>defense: {pokemon.defense}</div>
              <div className={styles.each}>speed: {pokemon.speed}</div>
              <div className={styles.each}>height: {pokemon.height} cm</div>
              <div className={styles.each}>weight: {pokemon.weight} kg</div>
            </div>
          </div>
          <Link to="/home">
            <button className={styles.button}>Back</button>
          </Link>
        </div>
      )}
    </div>
  );
}
