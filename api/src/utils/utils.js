const { Types } = require("../db.js");
const axios = require("axios");
const fetch = require("node-fetch");

async function getAllPokemons() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=40");

    const res = await response.json();

    const pokemonData = await Promise.all(
      res.results.map(async (p) => {
        const resp = await fetch(p.url);
        const pokemon = resp.json();
        return pokemon;
      })
    );

    return pokemonData.map((p) => {
      let pokemon = {};
      pokemon["id"] = p.id;
      pokemon["name"] = p.name;
      pokemon["types"] = p.types.map((t) => t.type.name);
      pokemon["attack"] = p.stats.find(
        (s) => s.stat.name === "attack"
      ).base_stat;
      pokemon["image"] = p.sprites.other.home.front_default;
      pokemon["createdByUser"] = false;
      return pokemon;
    });
  } catch (e) {
    console.error(e);
  }
}

async function getPokeapiByIdentifier(value) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
  const response = await res.json();

  let pokemon = {};
  pokemon["id"] = response.id;
  pokemon["name"] = response.name;
  pokemon["height"] = response.height * 10;
  pokemon["weight"] = response.weight / 10;
  pokemon["hp"] = response.stats.find((s) => s.stat.name === "hp").base_stat;
  pokemon["attack"] = response.stats.find(
    (s) => s.stat.name === "attack"
  ).base_stat;
  pokemon["defense"] = response.stats.find(
    (s) => s.stat.name === "defense"
  ).base_stat;
  pokemon["speed"] = response.stats.find(
    (s) => s.stat.name === "speed"
  ).base_stat;
  pokemon["types"] = response.types.map((t) => t.type.name);
  pokemon["image"] = response.sprites.other.home.front_default;

  return pokemon;
}

module.exports = { getAllPokemons, getPokeapiByIdentifier };
