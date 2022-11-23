import axios from "axios";

import {
  GET_ALL_POKEMON,
  GET_POKEMON_DETAIL,
  CREATE_POKEMON,
} from "./constants";

export const getAllPokemon = () => async (dispatch) => {
  console.log("GET !!!");
  // return axios.get(`http://localhost:3001/pokemon`).then((response) => {
  //   console.log("response.data", response.data);
  //   dispatch({ type: GET_ALL_POKEMON, payload: response.data });
  // });
  try {
    const res = await fetch("http://localhost:3001/pokemon");
    const response = await res.json();

    console.log("check", response);

    dispatch({ type: GET_ALL_POKEMON, payload: response });
  } catch (e) {
    console.error(e);
  }
};

export const getPokemonDetail = (name) => async (dispatch) => {
  // return async function (dispatch) {
  //   return axios
  //     .get(`http://localhost:3001/pokemon?name=${name}`)
  //     .then((response) =>
  //       dispatch({ type: GET_POKEMON_DETAIL, payload: response.data })
  //     );
  // };
};

export const createPokemon = (newPokemon) => {
  // return async function (dispatch) {
  //   return axios
  //     .post("http://localhost:3001/pokemon", newPokemon)
  //     .then((response) =>
  //       dispatch({ type: CREATE_POKEMON, payload: response.data })
  //     );
  // };
};
