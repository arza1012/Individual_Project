import "./App.module.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import CreatePokemon from "./components/CreatePokemon/CreatePokemon";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";
import LandingPage from "./components/LandingPage/LandingPage";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const location = useLocation();

  return (
    <>
      {location?.pathname !== "/" && <Navbar />}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/home/:id" element={<PokemonDetails />} />
        <Route exact path="/create" element={<CreatePokemon />} />
        <Route exact path="/notfound" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
