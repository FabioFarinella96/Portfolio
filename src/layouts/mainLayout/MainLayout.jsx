import styles from "./index.module.scss";
import NavBar from "../../components/navBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className={styles.MainLayout}>
      <NavBar />
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default MainLayout;
