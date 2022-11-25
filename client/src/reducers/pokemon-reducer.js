const initialState = {
  pokemons: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_POKEMON":
      return {
        ...state,
        pokemons: action.payload,
      };
    case "GET_POKEMON_BY_NAME":
      return {
        ...state,
        pokemons: action.payload,
      };
    case "GET_POKEMON_DETAIL":
      console.log("payload", action.payload);
      return {
        ...state,
        pokemons: action.payload,
      };
    // case "CREATE_POKEMON":
    //   return {
    //     ...state,
    //     pokemons: [...state.pokemons, action.payload],
    //   };
    default:
      return state;
  }
}
