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
      pokemon["height"] = p.height;
      pokemon["weight"] = p.weight;
      pokemon["life"] = p.stats.find((s) => s.stat.name === "hp").base_stat;
      pokemon["attack"] = p.stats.find(
        (s) => s.stat.name === "attack"
      ).base_stat;
      pokemon["defense"] = p.stats.find(
        (s) => s.stat.name === "defense"
      ).base_stat;
      pokemon["types"] = p.types.map((t) => t.type.name);
      pokemon["image"] = p.sprites.other.home.front_default;
      return pokemon;
    });
  } catch (e) {
    console.error(e);
  }
}

async function getPokemonByName(name) {
  console.log("getPokemonByName", name);
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const response = await res.json();

  let pokemon = {};
  pokemon["id"] = response.id;
  pokemon["name"] = response.name;
  pokemon["height"] = response.height;
  pokemon["weight"] = response.weight;
  pokemon["life"] = response.stats.find((s) => s.stat.name === "hp").base_stat;
  pokemon["attack"] = response.stats.find(
    (s) => s.stat.name === "attack"
  ).base_stat;
  pokemon["defense"] = response.stats.find(
    (s) => s.stat.name === "defense"
  ).base_stat;
  pokemon["types"] = response.types.map((t) => t.type.name);
  pokemon["image"] = response.sprites.other.home.front_default;

  console.log("pokemon", pokemon);

  return pokemon;
}

module.exports = { getAllPokemons, getPokemonByName };
