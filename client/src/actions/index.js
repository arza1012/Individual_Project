import {
  GET_ALL_POKEMON,
  GET_POKEMON_BY_NAME,
  GET_POKEMON_DETAIL,
  CREATE_POKEMON,
  GET_POKEMON_TYPES,
  CLEAR_SELECTED_POKEMON,
} from "./constants";

export const getAllPokemon = () => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:3001/pokemon");
    const response = await res.json();

    dispatch({ type: GET_ALL_POKEMON, payload: response });
  } catch (e) {
    console.error(e);
  }
};

export const getPokemonByName = (name) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:3001/pokemon?name=${name}`, {
      headers: { "content-type": "application/json" },
    });
    const response = await res.json();

    dispatch({ type: GET_POKEMON_BY_NAME, payload: response });
  } catch (e) {
    console.error(e);
  }
};

export const getPokemonDetail = (id) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:3001/pokemon/${id}`, {
      headers: { "content-type": "application/json" },
    });
    const response = await res.json();

    dispatch({ type: GET_POKEMON_DETAIL, payload: response });
  } catch (e) {
    console.error(e);
  }
};

export const createPokemon = (newPokemon) => async (dispatch) => {
  try {
    const rawData = await fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    });
    console.log("rawData", rawData);
    const response = await rawData.json();
    console.log("actionCreate", response);

    dispatch({ type: CREATE_POKEMON, payload: response });
  } catch (e) {
    console.error(e);
  }
};

export const getPokemonTypes = () => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:3001/types");
    const response = await res.json();
    console.log("responseTYPES", response);

    dispatch({ type: GET_POKEMON_TYPES, payload: response });
  } catch (e) {
    console.error(e);
  }
};

export const clearSelectedPokemon = () => async (dispatch) => {
  dispatch({ type: CLEAR_SELECTED_POKEMON });
};
