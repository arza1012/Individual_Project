import React, { useEffect, useState } from "react";
import styles from "./Pagination.module.css";

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
    <nav className={styles.container}>
      <div className={styles.innerContainer}>
        {pageNumbers
          ? pageNumbers.map((number) => (
              <div className={styles.number} key={number}>
                <span onClick={() => nextPage(number)}>{number}</span>
              </div>
            ))
          : null}
      </div>
    </nav>
  );
}
