import React, { useState } from "react";
import { createPokemon } from "../../actions/index";
import { useDispatch } from "react-redux";

const CreateNewPokemon = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
  });

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(createPokemon(values));
        }}
      >
        <label>Name: </label>
        <input type="text" name="name" onChange={handleChange} />
        <label>hp: </label>
        <input type="number" name="hp" onChange={handleChange} />
        <label>attack: </label>
        <input type="number" name="attack" onChange={handleChange} />
        <label>defense: </label>
        <input type="number" name="defense" onChange={handleChange} />
        <label>speed: </label>
        <input type="number" name="speed" onChange={handleChange} />
        <label>height: </label>
        <input type="number" name="height" onChange={handleChange} />
        <label>weight: </label>
        <input type="number" name="weight" onChange={handleChange} />
        <label>URL image: </label>
        <input type="text" name="image" onChange={handleChange} />
        {/* <label for="Pokemon types">Choose Pokemon types:</label>
        <select name="Pokemon types" multiple>
    <option>123</option>
    <option>456</option>
    <option>789</option>
</select> */}
        <button type="submit">Crear Pokemon</button>
      </form>
    </div>
  );
};

export default CreateNewPokemon;
