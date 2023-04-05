import styles from "./index.module.scss";
import ContactsModal from "../contactsModal";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className={styles.NavBar}>
      <ul className={styles.nav}>
        <Link className={styles.item} to="/">
          <li>Portfolio</li>
        </Link>
        <Link className={styles.item} to="/projects">
          <li>Projects</li>
        </Link>
      </ul>
      <button
        onClick={() => setIsOpenModal((prev) => !prev)}
        className={styles.btn}
      >
        Links
      </button>
      {isOpenModal && <ContactsModal />}
    </div>
  );
};

export default NavBar;
