export default function reducer(state = {}, action) {
  switch (action.type) {
    case "GET_POKEMON_BY_NAME":
      return action.payload;
    case "GET_POKEMON_DETAIL":
      return action.payload;
    case "CLEAR_SELECTED_POKEMON":
      return {};
    default:
      return state;
  }
}
