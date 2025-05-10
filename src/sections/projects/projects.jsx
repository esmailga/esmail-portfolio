import styles from './ProjectsStyles.module.css';

import ProjectCard from '../../common/ProjectCards';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>

      </div>
    </section>
  );
}

export default Projects;