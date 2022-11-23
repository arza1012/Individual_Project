import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemon } from "../../actions";

export default function Home() {
  console.log("load home");
  const pokemon = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  useEffect(() => {
    const getPokemon = async () => {
      console.log("GET");
      await dispatch(getAllPokemon());
    };
    getPokemon();
  }, [dispatch]);
  console.log("home pokemon", pokemon);
  return (
    <div>
      {pokemon?.pokemons?.map((p) => {
        return <div>{p}</div>;
      })}
    </div>
  );
}
