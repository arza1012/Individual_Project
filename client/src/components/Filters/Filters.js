import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemonTypes } from "../../actions/index";

export default function Filters() {
  const types = useSelector((state) => state.types);
  console.log("types", types);
  const dispatch = useDispatch();
  useEffect(() => {
    const getTypes = async () => {
      await dispatch(getPokemonTypes());
    };
    getTypes();
  }, [dispatch]);

  return (
    <div>
      <p>
        <form>
          <select name="Pokemon Types">
            {types?.map((t) => (
              <option>{t.name}</option>
            ))}
          </select>
        </form>
      </p>
    </div>
  );
}
