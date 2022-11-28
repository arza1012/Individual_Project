const { Router } = require("express");
const { Types } = require("../db.js");
const router = Router();
const fetch = require("node-fetch");

router.get("/", async (req, res) => {
  try {
    const existingTypes = await Types.findAll();

    if (existingTypes?.length > 0) {
      return res.status(200).send(existingTypes);
    } else {
      const res = await fetch("https://pokeapi.co/api/v2/type");
      const response = await res.json();
      const pokemonTypes = response.results.map((p) => {
        let row = {};
        row["name"] = p.name;
        return row;
      });

      const result = await Types.bulkCreate(pokemonTypes);

      return res.status(200).send(JSON.stringify(result));
    }
  } catch (error) {
    res.status(500).send("Algo salio mal");
  }
});

module.exports = router;
