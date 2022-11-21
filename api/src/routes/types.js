const { Router } = require("express");
const { Types } = require("../db.js");
const router = Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    console.log("start");
    const response = await axios.get("https://pokeapi.co/api/v2/type");
    console.log("response", response);

    const pokemonTypes = response.data.results.map((p) => {
      let row = {};
      row["name"] = p.name;
      return row;
    });

    console.log("pokemonTypes", pokemonTypes);

    const result = await Types.bulkCreate(pokemonTypes);
    console.log("result", result);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send("Algo salio mal");
  }
});

module.exports = router;
