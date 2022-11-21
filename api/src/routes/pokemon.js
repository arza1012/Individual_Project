const { Router } = require("express");
const { Pokemons } = require("../db.js");
const router = Router();
const axios = require("axios");
const { getAllPokemons } = require("../utils/utils.js");

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      //searching in myDB
      const pokemonByName = await Pokemons.findOne({ where: { name } });
      if (pokemonByName) {
        return res.status(200).send(pokemonByName);
      }
      //search in pokeapi
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      //if (response?.data) {
      return res.status(200).send(response.data);
      // } else {
      //   return res.status(400).send("Pokemon no encontrado");
      // }
    }
    //if not searching by name, get all pokemons from API

    const apiPokemon = await getAllPokemons();

    //get all pokemons from myDB
    const dbPokemons = await Pokemons.findAll();

    const combinedPokemon = [...dbPokemons, ...apiPokemon];

    return res.status(200).send(combinedPokemon);
  } catch (error) {
    res.status(500).send("Pokemon no encontrado");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (id) {
      //search in pokeapi
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        if (response?.data) {
          return res.status(200).json(response.data);
        }
      } catch (e) {
        console.error(e);
      }

      //else, search in myDB
      const pokemonById = await Pokemons.findByPk(id);
      if (pokemonById) {
        return res.status(200).send(pokemonById);
      } else {
        return res.status(400).send("Pokemon no encontrado");
      }
    }
  } catch (error) {
    res.status(500).send("Algo salio mal");
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, life, attack, defense, speed, height, weight } = req.body;
    if (!name) {
      return res.status(400).send("Falta agregar nombre de Pokemon");
    }
    const newPokemon = await Pokemons.create(req.body);
    res.status(201).send(newPokemon);
  } catch (error) {
    res
      .status(500)
      .send("No se pudo crear Pokemon. Error en alguno de los datos provistos");
  }
});

module.exports = router;
