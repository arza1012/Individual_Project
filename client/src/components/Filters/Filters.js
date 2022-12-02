import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemonTypes } from "../../actions/index";
import styles from "./Filters.module.css";

export default function Filters({
  setTypeFilter,
  setCreatedByUser,
  setSortedByAlph,
  setSortedByAttack,
}) {
  const types = useSelector((state) => state.types);

  const dispatch = useDispatch();
  useEffect(() => {
    const getTypes = async () => {
      await dispatch(getPokemonTypes());
    };
    getTypes();
  }, [dispatch]);

  function filteredByType(e) {
    setTypeFilter(e.target.value);
  }

  function filteredByCreated(e) {
    const createdByUser = e.target.value === "Created by user";
    setCreatedByUser([createdByUser]);
  }

  function sortedByAlphabet(e) {
    setSortedByAlph(e.target.value);
  }

  function sortedAttack(e) {
    setSortedByAttack(e.target.value);
  }

  return (
    <div className={styles.outerDiv}>
      <div className={styles.innerDiv}>
        <div className={styles.select}>
          <span className="selectDefault"></span>
          <select name="Pokemon Types" onChange={(e) => filteredByType(e)}>
            <option className="default-text">-- Select Types --</option>
            {types?.map((t) => (
              <option key={t.name}>{t.name}</option>
            ))}
          </select>
        </div>
        <div className={styles.select}>
          <span className="selectDefault"></span>
          <select name="Pokemon origin" onChange={(e) => filteredByCreated(e)}>
            <option className="default-text">-- Select Origin --</option>
            <option>Created by user</option>
            <option>Existing Pokemon</option>
          </select>
        </div>
        <div className={styles.select}>
          <span className="selectDefault"></span>
          <select name="Sort Pokemons" onChange={(e) => sortedByAlphabet(e)}>
            <option className="default-text">-- Select A-Z --</option>
            <option>Ascendant</option>
            <option>Descendant</option>
          </select>
        </div>
        <div className={styles.select}>
          <span className="selectDefault"></span>
          <select name="Sort Attack" onChange={(e) => sortedAttack(e)}>
            <option className="default-text">-- Select by attack --</option>
            <option>Ascendant</option>
            <option>Descendant</option>
          </select>
        </div>
      </div>
    </div>
  );
}
