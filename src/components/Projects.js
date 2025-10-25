import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive personal portfolio website built with React.js showcasing my skills, projects, and experience. Features modern UI design with smooth animations and mobile-first approach.',
      technologies: ['React.js', 'CSS3', 'JavaScript', 'HTML5'],
      githubLink: 'https://github.com/neha-jore/personal-portfolio',
      liveLink: 'https://neha-portfolio.netlify.app',
      image: 'image.png'
    },
    {
      title: 'Fast Food Website',
      description: 'A full-stack fast food ordering website with React frontend and Spring Boot backend. Includes user authentication, menu management, order tracking, and payment integration.',
      technologies: ['React.js', 'Spring Boot', 'MySQL', 'Java', 'CSS3'],
      githubLink: 'https://github.com/neha-jore/fastfood-website',
      liveLink: 'https://fastfood-demo.netlify.app',
      image: 'fastfood.png'
    }
  ];

  return (
    <div className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
