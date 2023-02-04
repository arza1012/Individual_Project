import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import pokemon from "../../images/catchemall.png";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.outerButton}>
        <img className={styles.pokemon} src={pokemon} alt="logo pokemon" />
        <Link to="/home">
          <button className={styles.button}>Let's go!</button>
        </Link>
      </div>
    </div>
  );
}
