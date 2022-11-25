import React from "react";
import { getPokemonDetail } from "../../actions/index";
import { useDispatch } from "react-redux";

const PokemonCard = ({ image, name, types }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div onClick={() => dispatch(getPokemonDetail())} />
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Pokemon Type: {types}</p>
    </div>
  );
};

export default PokemonCard;
