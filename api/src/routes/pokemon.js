const { Router } = require("express");
const { Pokemons, Types } = require("../db.js");
const fetch = require("node-fetch");
const router = Router();
const axios = require("axios");
const { getAllPokemons, getPokeapiByIdentifier } = require("../utils/utils.js");

router.get("/", async (req, res) => {
  try {
    console.log("CHECK");
    const { name } = req.query;
    if (name) {
      //searching in myDB
      const pokemonByName = await Pokemons.findOne({
        where: { name: name },
      });
      if (pokemonByName) {
        return res.status(200).send(pokemonByName);
      }
      //search in pokeapi
      const apiPokemonName = await getPokeapiByIdentifier(name);

      if (apiPokemonName) {
        return res.status(200).send(apiPokemonName);
      } else {
        return res.status(400).send("Pokemon no encontrado");
      }
    }
    //if not searching by name, get all pokemons from API

    const apiPokemon = await getAllPokemons();

    //get all pokemons from myDB
    const dbPokemons = await Pokemons.findAll();

    const combinedPokemon = [...dbPokemons, ...apiPokemon];

    res.status(200).send(combinedPokemon);
  } catch (error) {
    res.status(500).send("Pokemon no encontrado");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("idback", id);

    if (id) {
      //search in pokeapi
      try {
        const apiPokemonId = await getPokeapiByIdentifier(id);
        console.log("apiPokemonId", apiPokemonId);

        if (apiPokemonId) {
          return res.status(200).json(apiPokemonId);
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
