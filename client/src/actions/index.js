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
    const res = await fetch(`${process.env.REACT_APP_API_URL}/pokemon`);
    const response = await res.json();

    dispatch({ type: GET_ALL_POKEMON, payload: response });
  } catch (e) {
    console.error(e);
  }
};

export const getPokemonByName = (name) => async (dispatch) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/pokemon?name=${name}`,
      {
        headers: { "content-type": "application/json" },
      }
    );
    const response = await res.json();

    dispatch({ type: GET_POKEMON_BY_NAME, payload: response });
  } catch (e) {
    console.error(e);
  }
};

export const getPokemonDetail = (id) => async (dispatch) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/pokemon/${id}`, {
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
    const rawData = await fetch(`${process.env.REACT_APP_API_URL}/pokemon`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    });

    const response = await rawData.json();

    dispatch({ type: CREATE_POKEMON, payload: response });
  } catch (e) {
    console.error(e);
  }
};

export const getPokemonTypes = () => async (dispatch) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/types`);
    const response = await res.json();

    dispatch({ type: GET_POKEMON_TYPES, payload: response });
  } catch (e) {
    console.error(e);
  }
};

export const clearSelectedPokemon = () => async (dispatch) => {
  dispatch({ type: CLEAR_SELECTED_POKEMON });
};
