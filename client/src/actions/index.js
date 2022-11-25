import {
  GET_ALL_POKEMON,
  GET_POKEMON_BY_NAME,
  GET_POKEMON_DETAIL,
  // CREATE_POKEMON,
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
  console.log("sending req", id);
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

// export const createPokemon = (newPokemon) => {
// return async function (dispatch) {
//   return axios
//     .post("http://localhost:3001/pokemon", newPokemon)
//     .then((response) =>
//       dispatch({ type: CREATE_POKEMON, payload: response.data })
//     );
// };
// };
