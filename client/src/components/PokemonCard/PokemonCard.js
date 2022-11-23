import React from "react";
import { getPokemonDetail } from "../../actions/index";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// Importar las actions como Object Modules, sino los test no funcionarán!

//PARA QUE LOS TEST CORRAN, DEBEN HACER ESTE COMPONENTE COMO UN FUNCIONAL COMPONENT.

const PokemonCard = ({ img, name, type }) => {
  const dispatch = useDispatch();

  //   <Link to={`/name=${name}`}></Link>

  return (
    <div className="card">
      <div onClick={() => dispatch(getPokemonDetail())} />

      <img src={img} alt={name} />
      <p>{name}</p>
      <p>Pokemon Type: {type}</p>
    </div>
  );
};

export default PokemonCard;
