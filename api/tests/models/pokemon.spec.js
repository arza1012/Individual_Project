const { Pokemons, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Pokemon model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Pokemons.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Pokemons.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Pokemons.create({ name: "Pikachu" });
      });
    });
  });

  describe("List of stats", () => {
    it("should throw an error if hp is not a number", (done) => {
      Pokemons.create({ name: "Pikachu", hp: "Lorem Ipsum" })
        .then(() => done(new Error("Hp should be a number")))
        .catch(() => done());
    });
    it("should throw an error if attack is not a number", (done) => {
      Pokemons.create({ name: "Pikachu", attack: "Lorem Ipsum" })
        .then(() => done(new Error("Attack should be a number")))
        .catch(() => done());
    });
    it("should throw an error if defense is not a number", (done) => {
      Pokemons.create({ name: "Pikachu", defense: "Lorem Ipsum" })
        .then(() => done(new Error("Defense should be a number")))
        .catch(() => done());
    });
    it("should throw an error if speed is not a number", (done) => {
      Pokemons.create({ name: "Pikachu", speed: "Lorem Ipsum" })
        .then(() => done(new Error("Speed should be a number")))
        .catch(() => done());
    });
    it("should throw an error if height is not a number", (done) => {
      Pokemons.create({ name: "Pikachu", height: "Lorem Ipsum" })
        .then(() => done(new Error("Height should be a number")))
        .catch(() => done());
    });
    it("should throw an error if weight is not a number", (done) => {
      Pokemons.create({ name: "Pikachu", weight: "Lorem Ipsum" })
        .then(() => done(new Error("Weight should be a number")))
        .catch(() => done());
    });
  });
});
