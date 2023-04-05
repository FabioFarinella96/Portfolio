import styles from "./index.module.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const ContactsModal = () => {
  return (
    <div className={styles.ContactsModal}>
      <div className={styles.gitHub}>
        <BsGithub className={styles.icon} />
        <a className={styles.link} href="https://github.com/FabioFarinella96">
          GitHub
        </a>
      </div>
      <div className={styles.linkedin}>
        <BsLinkedin className={styles.icon} />
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/fabio-farinella/"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
};

export default ContactsModal;
