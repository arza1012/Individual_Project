export default function typesReducer(state = [], action) {
  switch (action.type) {
    case "GET_POKEMON_TYPES":
      return action.payload;
    default:
      return state;
  }
}
