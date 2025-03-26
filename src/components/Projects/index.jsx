import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { FaGithub, FaExternalLinkAlt, FaReact, FaDatabase, FaCode } from "react-icons/fa";
import ContentLoader from "react-content-loader";
import "./project.css";
import { projectsData } from "./projectsData";


const ProjectLoader = () => (
  <ContentLoader 
    speed={2}
    width="100%"
    height={250}
    viewBox="0 0 400 250"
    backgroundColor="#d0e1ff" // Light blue background
    foregroundColor="#a7c4ff" // Slightly darker shade for animation
  >
    {/* Icons Placeholder */}
    <rect x="10" y="10" rx="5" ry="5" width="40" height="40" />
    <rect x="60" y="10" rx="5" ry="5" width="40" height="40" />
    <rect x="110" y="10" rx="5" ry="5" width="40" height="40" />

    {/* Title Placeholder */}
    <rect x="10" y="60" rx="5" ry="5" width="250" height="20" />

    {/* Description Placeholder */}
    <rect x="10" y="90" rx="5" ry="5" width="90%" height="15" />
    <rect x="10" y="115" rx="5" ry="5" width="85%" height="15" />
    <rect x="10" y="140" rx="5" ry="5" width="70%" height="15" />

    {/* Technologies Used Placeholder */}
    <rect x="10" y="170" rx="5" ry="5" width="60%" height="15" />

    {/* Buttons Placeholder */}
    <rect x="10" y="200" rx="5" ry="5" width="100" height="30" />
    <rect x="120" y="200" rx="5" ry="5" width="100" height="30" />
  </ContentLoader>
);


class Projects extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  render() {
    const { loading } = this.state;

    return (
      <>
        <Header />
        <div className="projects-container">
          {loading ? (
            Array(4).fill().map((_, index) => <ProjectLoader key={index} />)
          ) : (
            projectsData.map((project) => (
              <div className="project-card" key={project.id}>
                <div className="project-tech-icons">
                  <FaReact className="tech-icon" />
                  <FaDatabase className="tech-icon" />
                  <FaCode className="tech-icon" />
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <p className="project-skills">
                    <strong className="technologies-used">Technologies Used:</strong> {project.techologies_used}
                  </p>
                  <div className="project-link-container">
                    <a
                      href={project.view_live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt className="link-icon" />
                      Live Demo
                    </a>
                    <a
                      href={project.repo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub className="link-icon" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <Footer />
      </>
    );
  }
}

export default Projects;

