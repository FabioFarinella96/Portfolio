import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";
import projects from "../mocks/projects";
import ProjectsList from "../components/projectsList/ProjectsList";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import styles from "../styles/pages/projects.module.scss";

const Projects = () => {
  return (
    <div className={styles.Projects}>
      <div>
        <h3 className={styles.subtitle}>
          Rotate the cube to view the projects
        </h3>
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          modules={[EffectCube, Pagination]}
          className={styles.swiper}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <img src={projects[1].image} />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={projects[0].image} />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={projects[2].image} />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={projects[3].image} />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={projects[4].image} />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={projects[5].image} />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={projects[6].image} />
          </SwiperSlide>
        </Swiper>
      </div>
      <ProjectsList />
    </div>
  );
};

export default Projects;
