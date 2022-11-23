const { Router } = require("express");
const { Types } = require("../db.js");
const router = Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/type");

    const pokemonTypes = response.data.results.map((p) => {
      let row = {};
      row["name"] = p.name;
      return row;
    });

    const result = await Types.bulkCreate(pokemonTypes);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send("Algo salio mal");
  }
});

module.exports = router;
