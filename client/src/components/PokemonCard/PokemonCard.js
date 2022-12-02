import React from "react";
import { getPokemonDetail } from "../../actions/index";
import { useDispatch } from "react-redux";
import styles from "./PokemonCard.module.css";
import { useNavigate } from "react-router-dom";
import pokeball from "../../images/pokeball.png";

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
        <div className={styles.outerImage}>
          <img
            className={styles.image}
            src={image ? image : pokeball}
            alt={name}
          />
        </div>
        <div className={styles.details}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.innerType}>{types}</p>
          <p className={styles.attack}>Attack: {attack}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
