import styles from "../styles/pages/projects.module.scss";
import ProjectsList from "../components/projectsList";

const Projects = () => {
  return (
    <div className={styles.Projects}>
      <ProjectsList />
    </div>
  );
};

export default Projects;
