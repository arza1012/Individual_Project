import React from "react";
import { Link } from "react-router-dom";
import image from "../../images/squirtle.png";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <div className={styles.message1}>Oops! Pokemon doesn't exist</div>
        <img className={styles.squirtle} src={image} alt="squirtle laughing" />
        <div className={styles.message2}> Would you like to create it?</div>
        <div className={styles.button}>
          <Link className={styles.innerButton} to={"/home"}>
            <button>Take me back!</button>
          </Link>
          <Link className={styles.innerButton} to={"/create"}>
            <button>Create Pokemon</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
