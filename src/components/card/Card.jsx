import styles from "./index.module.scss";
import { HiOutlineExternalLink } from "react-icons/hi";

const Card = ({ data }) => {
  return (
    <div className={styles.Card}>
      <a href={data.url}>
        <img className={styles.image} src={data.image} alt={data.title} />
      </a>
      <div className={styles.titleContainer}>
        <HiOutlineExternalLink className={styles.icon} />
        <a href={data.url}>
          <p className={styles.title}>{data.title}</p>
        </a>
      </div>
    </div>
  );
};

export default Card;
