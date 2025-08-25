import styles from "./ProjectsStyles.module.css";
import portfolio from "../../assets/profile.png";
import spotify from "../../assets/Spotify-Logo.png";
import qrCode from "../../assets/qr-code.png";
import ticTacToe from "../../assets/tic-tac-toe.png";
import randomQuoteMachine from "../../assets/random-quote-machine.png";
import technicalDocumentation from "../../assets/technical-documentation-img.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={portfolio}
          link="https://github.com/Darasimi010/reactjs-portfolio"
          h3="Portfolio"
          p="Portfolio Website"
        />
        <ProjectCard
          src={spotify}
          link="https://github.com/Darasimi010/spotify-clone"
          h3="Spotify Clone"
          p="Spotify Clone Website"
        />
        <ProjectCard
          src={qrCode}
          link="https://github.com/Darasimi010/QR_code_page"
          h3="QR-Code"
          p="freeCodeCamp QR-Code"
        />
        <ProjectCard
          src={ticTacToe}
          link="https://github.com/Darasimi010/tic-tac-toe-game"
          h3="Tic-Tac-Toe"
          p="Tic-Tac-Toe Game"
        />
        <ProjectCard
          src={randomQuoteMachine}
          link="https://github.com/Darasimi010/freecodecamp-quote-machine-project"
          h3="Random Quotes"
          p="Random Quote Machine"
        />
        <ProjectCard
          src={technicalDocumentation}
          link="https://github.com/Darasimi010/fcc-technical-documentation-page"
          h3="Technical Documentation"
          p="Technical Documentation Page"
        />
      </div>
    </section>
  );
}

export default Projects;
