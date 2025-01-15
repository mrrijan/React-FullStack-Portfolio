import styles from "./ProjectStyles.module.css";
import Ad from "../../assets/ad_management_system.jpeg";
import ProjectCard from "../../common/ProjectCard";
import erp from "../../assets/erp.jpeg";
import hms from "../../assets/hotel_management_system.jpeg";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Ad}
          link="https://github.com/mrrijan/ad_management_system.git"
          h3="AMS"
          p="Ad Management Web Application"
        />
        <ProjectCard
          src={erp}
          link="https://github.com/mrrijan/erp.git"
          h3="ERP"
          p="Enterprise Resource Planning"
        />
        <ProjectCard
          src={hms}
          link="https://github.com/mrrijan/hms.git"
          h3="HMS"
          p="A Hotel Management System"
        />
      </div>
    </section>
  );
}

export default Projects;
