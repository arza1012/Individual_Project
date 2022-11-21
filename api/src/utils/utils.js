// const { Router } = require("express");
// const router = Router();
const { Types } = require("../db.js");
const axios = require("axios");

async function getAllPokemons() {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=20`
    );
    return response.data.results.map((p) => p.name);
  } catch (e) {
    console.error(e);
  }
}

module.exports = { getAllPokemons };
