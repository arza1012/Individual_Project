import React, { useEffect, useState } from "react";

export default function Pagination({
  charactersPerPage,
  pokemonLength,
  nextPage,
}) {
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const pageNums = [];
    for (let i = 1; i <= Math.ceil(pokemonLength / charactersPerPage); i++) {
      pageNums.push(i);
    }
    setPageNumbers(pageNums);
  }, [pokemonLength, charactersPerPage]);

  return (
    <nav>
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number}>
              <span onClick={() => nextPage(number)}>{number}</span>
            </li>
          ))}
      </ul>
    </nav>
  );
}
