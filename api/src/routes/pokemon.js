const { Router } = require("express");
const { Pokemons, Types } = require("../db.js");
const fetch = require("node-fetch");
const router = Router();
const { getAllPokemons, getPokeapiByIdentifier } = require("../utils/utils.js");

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      //searching in myDB
      const pokemonByName = await Pokemons.findOne({
        where: {
          name: name,
        },
        include: {
          model: Types,
          attribuites: ["name"],
          through: { attributes: [] },
        },
      });
      if (pokemonByName) {
        return res.status(200).json(pokemonByName);
      }
      //search in pokeapi
      const apiPokemonName = await getPokeapiByIdentifier(name);

      if (apiPokemonName) {
        return res.status(200).json(apiPokemonName);
      } else {
        return res.status(400).json("Pokemon no encontrado");
      }
    }
    //if not searching by name, get all pokemons from API

    const apiPokemon = await getAllPokemons();

    //get all pokemons from myDB
    const dbPokemons = await Pokemons.findAll({
      include: {
        model: Types,
        attribuites: ["name"],
        through: { attributes: [] },
      },
    });

    const combinedPokemon = [...dbPokemons, ...apiPokemon];

    res.status(200).json(combinedPokemon);
  } catch (error) {
    res.status(500).json("Pokemon no encontrado");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (id) {
      //search in pokeapi
      try {
        const apiPokemonId = await getPokeapiByIdentifier(id);

        if (apiPokemonId) {
          return res.status(200).json(apiPokemonId);
        }
      } catch (e) {
        console.error(e);
      }

      //else, search in myDB
      const pokemonById = await Pokemons.findByPk(id, {
        include: {
          model: Types,
          attribuites: ["name"],
          through: { attributes: [] },
        },
      });
      if (pokemonById) {
        return res.status(200).json(pokemonById);
      } else {
        return res.status(400).json("Pokemon no encontrado");
      }
    }
  } catch (error) {
    res.status(500).json("Algo salio mal");
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, types } = req.body;
    if (!name) {
      return res.status(400).json("Falta agregar nombre de Pokemon");
    }

    const pokemonPreviouslyCreated = await Pokemons.findOne({
      where: { name: name },
    });
    if (pokemonPreviouslyCreated) return res.json("El pokemon ya existe");

    const newPokemon = await Pokemons.create(req.body);
    const typesDb = await Types.findAll({ where: { name: types } });
    newPokemon.addType(typesDb);

    res.status(201).json(newPokemon);
  } catch (error) {
    res
      .status(500)
      .json("No se pudo crear Pokemon. Error en alguno de los datos provistos");
  }
});

module.exports = router;
