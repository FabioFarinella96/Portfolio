import styles from "./index.module.scss";
import Card from "../../components/card";
import projects from "../../mocks/projects";

const ProjectsList = () => {
  return (
    <div className={styles.ProjectsList}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>My projects</h2>
      </div>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <Card data={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
