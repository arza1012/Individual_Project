import React, { useEffect, useState } from "react";

export default function Pagination({ charactersPerPage, pokemon, nextPage }) {
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const pageNums = [];
    for (let i = 1; i <= Math.ceil(pokemon / charactersPerPage); i++) {
      pageNums.push(i);
    }
    setPageNumbers(pageNums);
  }, [pokemon, charactersPerPage]);

  return (
    <nav>
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li>
              <a onClick={() => nextPage(number)}>{number}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
}
