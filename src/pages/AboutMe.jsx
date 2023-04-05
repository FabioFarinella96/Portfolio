import styles from "../styles/pages/aboutMe.module.scss";
import { RiContactsFill } from "react-icons/ri";

const AboutMe = () => {
  return (
    <div className={styles.AboutMe}>
      <h1 className={styles.title}>About me</h1>

      <div className={styles.text}>
        <p>
          Sono Fabio, ho 26 anni e vivo a Petralia Sottana, in provincia di
          Palermo.
        </p>
        <p>
          Fin da ragazzino ho sempre avuto la passione per la musica e la
          tecnologia. Mi sono avvicinato da poco al mondo della programmazione,
          in particolare allo sviluppo Web e devo dire che, col tempo, mi sta
          appassionando sempre di più.
        </p>
        <p>
          {" "}
          Sono una persona molto curiosa e in continua ricerca di nuovi stimoli.
          Reputo questo mestiere molto creativo e stimolante, nonostante le
          difficoltà che si incontrano giorno dopo giorno.
        </p>
        <p>
          Dopotutto è proprio questa la vita dello sviluppatore, risolvere
          problemi.
        </p>
      </div>
      <div className={styles.contacts}>
        <div className={styles.textContent}>
          <RiContactsFill className={styles.icon} />
          <h3 className={styles.contactsTitle}> Contacts</h3>
        </div>
        <p>fabiofarinella96@gmail.com</p>
        <p>+37 3773987086</p>
      </div>
    </div>
  );
};

export default AboutMe;
