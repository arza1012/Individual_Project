// import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import CreatePokemon from "./components/CreatePokemon/CreatePokemon";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<PokemonDetails />} />
        <Route path="/create" element={<CreatePokemon />} />
      </Routes>
    </>
  );
}

export default App;
