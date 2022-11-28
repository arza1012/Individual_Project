import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./LandingPage.module.css";
import squirtlemovie from "../../images/squirtlemovie.mov";

export default function LandingPage() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    if (showButton) {
      return;
    }
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [setShowButton]);

  return (
    <div>
      <video className={styles.video} src={squirtlemovie} autoPlay muted />
      <div style={{ display: showButton ? "inline" : "none" }}>
        <Link to="/home">
          <button className={styles.button}>Let's go!</button>
        </Link>
      </div>
    </div>
  );
}
