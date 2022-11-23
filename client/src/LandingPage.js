import styles from "./LandingPage.module.css";

export default function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.btnPgInfo}>Pokemon</div>
      <div className={styles.btnMention}>
        <span>Get up, get out and Explore!</span>
      </div>
      <div className={styles.btnGroup}>
        <div className={styles.bgBall}>
          <button>
            <div className={styles.pokemonBall}></div>Pokemon
            <span data-letters="GO!"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
