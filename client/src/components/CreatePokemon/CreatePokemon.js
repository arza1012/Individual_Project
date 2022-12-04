import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPokemon } from "../../actions/index";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Create.module.css";

const CreateNewPokemon = () => {
  const types = useSelector((state) => state.types);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    image: "",
    types: "",
  });

  const [errors, setErrors] = useState({});
  const validate = (input) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexURl =
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

    if (!input.name.trim()) {
      errors.name = "El campo 'Name' es obligatorio";
      if (!regexURl.test(input.image.trim())) {
        errors.image = "Debes añadir un URL válido";
      }
    } else if (!regexName.test(input.name)) {
      errors.name = "El campo 'Name' solo acepta letras y espacios en blanco";
    }

    return errors;
  };

  function handleChange(event) {
    if (event.target.id === "typeSelect") {
      const updatedTypes = [...values.types, event.target.value];
      setValues({
        ...values,
        types: updatedTypes,
      });
    } else {
      setErrors(
        validate({
          ...values,
          [event.target.name]: event.target.value,
        })
      );
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(createPokemon(values));
    navigate(`/home`);
  }

  return (
    <div>
      <div className={styles.container}>
        <form className={styles.form}>
          <label className={styles.subtitle}>Name: </label>
          <input type="text" name="name" onChange={handleChange} />
          {errors.name && <p className={styles.danger}>{errors.name}</p>}
          <label className={styles.subtitle}>hp: </label>
          <input type="number" name="hp" onChange={handleChange} />
          <label className={styles.subtitle}>attack: </label>
          <input type="number" name="attack" onChange={handleChange} />
          <label className={styles.subtitle}>defense: </label>
          <input type="number" name="defense" onChange={handleChange} />
          <label className={styles.subtitle}>speed: </label>
          <input type="number" name="speed" onChange={handleChange} />
          <label className={styles.subtitle}>height: </label>
          <input type="numer" name="height" onChange={handleChange} />
          {errors.height && <p className={styles.danger}>{errors.height}</p>}
          <label className={styles.subtitle}>weight: </label>
          <input type="number" name="weight" onChange={handleChange} />
          {errors.weight && <p className={styles.danger}>{errors.weight}</p>}
          <label className={styles.subtitle}>URL image: </label>
          <input type="text" name="image" onChange={handleChange} />
          {errors.image && <p className={styles.danger}>{errors.image}</p>}

          <span className={styles.subtitle}>Select pokemon type:</span>
          <select id="typeSelect" value={values.types} onChange={handleChange}>
            <option className="default-text">-- Select Types --</option>
            {types?.map((t, index) => (
              <option key={index} value={t.name}>
                {t.name}
              </option>
            ))}
          </select>
          <div className={styles.submit}>
            <button type="submit" onClick={handleSubmit}>
              Create Pokemon
            </button>
          </div>
        </form>
        <Link to="/home">
          <button className={styles.button}>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default CreateNewPokemon;
