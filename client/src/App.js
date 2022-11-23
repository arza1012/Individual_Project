import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";
import CreatePokemon from "./components/CreatePokemon/CreatePokemon";
//    <div className={styles.app}>

console.log("LOAD OUTER");

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/:id" element={PokemonDetails} />
        <Route path="/create" element={CreatePokemon} />
      </Routes>
    </>
  );
}

export default App;
