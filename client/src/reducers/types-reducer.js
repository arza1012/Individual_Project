export default function typesReducer(state = [], action) {
  switch (action.type) {
    case "GET_POKEMON_TYPES":
      console.log("pokemontypes", action.payload);
      return action.payload;
    default:
      return state;
  }
}
