import styles from "../styles/pages/portfolio.module.scss";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className={styles.Portfolio}>
      <div className={styles.upSection}>
        <div className={styles.textSection}>
          <h2 className={styles.title}>
            My name <br /> is <b>Fabio</b>
          </h2>
          <p className={styles.subtitle}>I am a Junior Front End Developer</p>
          <Link to="/about">
            <button className={styles.btn}>About me</button>
          </Link>
        </div>
        <div className={styles.imageSection}>
          <img className={styles.image} src="./img/img.png" alt="image" />
        </div>
      </div>
      <div className={styles.skillsSection}>
        <h4 className={styles.item}>HTML5</h4>
        <h4 className={styles.item}>CSS3</h4>
        <h4 className={styles.item}>Javascript</h4>
        <h4 className={styles.item}>React JS</h4>
        <h4 className={styles.item}>SASS</h4>
        <h4 className={styles.item}>GIT</h4>
        <h4 className={styles.item}>Node JS</h4>
        <h4 className={styles.item}>Next JS</h4>
      </div>
    </div>
  );
}

export default Portfolio;
