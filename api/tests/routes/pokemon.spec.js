/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Pokemons, conn } = require("../../src/db.js");

const agent = session(app);
const pokemon = {
  name: "Pikachu",
};

describe("Pokemon routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Pokemons.sync({ force: true }).then(() => Pokemons.create(pokemon))
  );
  describe("GET /pokemon", () => {
    it("should get 200", (done) => {
      agent.get("/pokemon").expect(200);
      done();
    });
  });
  describe("GET /pokemon/:id", () => {
    it("should get 200 if an id is provided", (done) => {
      agent.get("/pokemons/10").expect(200);
      done();
    });
  });
  describe("GET /pokemon?name=xxx", () => {
    it("should get 200 if a name is provided", (done) => {
      agent.get("/pokemon?name=pikachu");
      done();
    });
  });
});
