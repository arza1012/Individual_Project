import { createStore, applyMiddleware, combineReducers } from "redux";
import ReducerPokemon from "./pokemon-reducer";
import ReducerSelectedPokemon from "./selected-pokemon-reducer";
import ReducerTypes from "./types-reducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  selectedPokemon: ReducerSelectedPokemon,
  pokemon: ReducerPokemon,
  types: ReducerTypes,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
