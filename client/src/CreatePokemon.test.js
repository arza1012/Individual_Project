import React from "react";
import * as actions from "../src/actions/index";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import data from "../src/reducers/pokemon-reducer";
import CreatePokemon from "../src/components/CreatePokemon/CreatePokemon";

configure({ adapter: new Adapter() });

jest.mock("../src/actions/index", () => ({
  CREATE_POKEMON: "CREATE_POKEMON",
  createPokemon: (payload) => ({
    type: "CREATE_POKEMON",
    payload: {
      ...payload,
    },
  }),
}));

describe("<CreatePokemon/>", () => {
  const state = { pokemons: data.pokemons };
  const mockStore = configureStore([thunk]);

  describe("Formulario de creación nuevo Pokemon", () => {
    let CreateNewPokemon;
    let store = mockStore(state);
    beforeEach(() => {
      CreateNewPokemon = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/create"]}>
            <CreatePokemon />
          </MemoryRouter>
        </Provider>
      );
    });

    it("Debe renderizar un formulario", () => {
      expect(CreateNewPokemon.find("form")).toHaveLength(1);
    });

    it('Debe renderizar un label para el nombre con el texto "Name: "', () => {
      expect(CreateNewPokemon.find("label").at(0).text()).toEqual("Name: ");
    });

    it('Debe renderizar un input de tipo text para con la propiedad "name" igual a "name"', () => {
      expect(CreateNewPokemon.find('input[name="name"]').length).toBe(1);
    }); //////////////

    it('Debe renderizar un label para vida de Pokemon con el texto "hp: "', () => {
      expect(CreateNewPokemon.find("label").at(1).text()).toBe("hp: ");
    });

    it('Debe renderizar un input de tipo number para con la propiedad "name" igual a "hp"', () => {
      expect(CreateNewPokemon.find('input[name="hp"]').length).toBe(1);
    }); /////////////
    it('Debe renderizar un label para nivel de ataque con el texto "attack: "', () => {
      expect(CreateNewPokemon.find("label").at(2).text()).toBe("attack: ");
    });
    it('Debe renderizar un input de tipo number para con la propiedad "name" igual a "attack"', () => {
      expect(CreateNewPokemon.find('input[name="attack"]').length).toBe(1);
    });
    ////////
    it('Debe renderizar in label para el nivel de defensa con el texto "defense: "', () => {
      expect(CreateNewPokemon.find("label").at(3).text()).toEqual("defense: ");
    });
    it('Debe renderizar un input de tipo number para con la propiedad "name" igual a "defense"', () => {
      expect(CreateNewPokemon.find('input[name="defense"]').length).toBe(1);
    }); ////////////
    it('Debe renderizar in label para velocidad con el texto "speed: "', () => {
      expect(CreateNewPokemon.find("label").at(4).text()).toEqual("speed: ");
    });
    it('Debe renderizar un input de tipo number para con la propiedad "name" igual a "speed"', () => {
      expect(CreateNewPokemon.find('input[name="speed"]').length).toBe(1);
    }); ////////////
    it('Debe renderizar in label para altura con el texto "height: "', () => {
      expect(CreateNewPokemon.find("label").at(5).text()).toEqual("height: ");
    });
    it('Debe renderizar un input de tipo number para con la propiedad "name" igual a "height"', () => {
      expect(CreateNewPokemon.find('input[name="height"]').length).toBe(1);
    }); ////////////
    it('Debe renderizar in label para peso con el texto "weight: "', () => {
      expect(CreateNewPokemon.find("label").at(6).text()).toEqual("weight: ");
    });
    it('Debe renderizar un input de tipo number para con la propiedad "name" igual a "weight"', () => {
      expect(CreateNewPokemon.find('input[name="weight"]').length).toBe(1);
    }); ////////////

    it('Debería renderizar un button submit y con texto "Create Pokemon"', () => {
      expect(CreateNewPokemon.find('button[type="submit"]').length).toBe(1);
      expect(CreateNewPokemon.find('button[type="submit"]').text()).toBe(
        "Create Pokemon"
      );
    });
  });
});
