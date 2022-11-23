// import {
//   GET_ALL_POKEMON,
//   GET_POKEMON_DETAIL,
//   CREATE_POKEMON,
// } from "../actions/index";

const initialState = {
  pokemons: [],
  pokemonDetail: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_POKEMON":
      console.log("payload", action.payload);
      return {
        ...state,
        pokemons: action.payload,
      };
    case "GET_POKEMON_DETAIL":
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    case "CREATE_POKEMON":
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
      };
    default:
      return state;
  }
}
