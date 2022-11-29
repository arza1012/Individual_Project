import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemonTypes } from "../../actions/index";

export default function Filters({
  setTypeFilter,
  setCreatedByUser,
  setSortedBy,
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

  function sortedBy(e) {
    setSortedBy(e.target.value);
  }

  return (
    <div>
      <div>
        <select name="Pokemon Types" onChange={(e) => filteredByType(e)}>
          <option>All</option>
          {types?.map((t) => (
            <option key={t.name}>{t.name}</option>
          ))}
        </select>
      </div>
      <div>
        <select name="Pokemon origin" onChange={(e) => filteredByCreated(e)}>
          <option>All</option>
          <option>Created by user</option>
          <option>Existing Pokemon</option>
        </select>
      </div>
      <div>
        <select name="Sort Pokemons" onChange={(e) => sortedBy(e)}>
          <option>All</option>
          <option>Ascendant</option>
          <option>Descendant</option>
        </select>
      </div>
    </div>
  );
}
