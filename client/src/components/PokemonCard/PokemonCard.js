import React from "react";
import { getPokemonDetail } from "../../actions/index";
import { useDispatch } from "react-redux";
import styles from "./PokemonCard.module.css";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ id, image, name, types, attack }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const redirect = () => {
    navigate(`/home/${id}`);
  };

  return (
    <div className={styles.outerCard}>
      <div className={styles.card} onClick={redirect}>
        <div onClick={() => dispatch(getPokemonDetail())} />
        <p>#{id}</p>
        <div>
          <img className={styles.image} src={image} alt={name} />
        </div>
        <h2 className={styles.name}>{name}</h2>
        <p>Pokemon Type: </p>
        <p>{types}</p>
        <p>Attack: {attack}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
