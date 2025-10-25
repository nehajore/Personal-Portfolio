import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaJava, 
  FaReact, 
  FaDatabase 
} from 'react-icons/fa';
import { SiSpringboot, SiMysql } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      name: 'HTML5',
      icon: <FaHtml5 className="skill-icon" />,
      
    },
    {
      name: 'CSS3',
      icon: <FaCss3Alt className="skill-icon" />,
      
    },
    {
      name: 'JavaScript',
      icon: <FaJs className="skill-icon" />,
     
    },
    {
      name: 'Java',
      icon: <FaJava className="skill-icon" />,
     
    },
    {
      name: 'Spring Boot',
      icon: <SiSpringboot className="skill-icon" />,
     
    },
    {
      name: 'MySQL',
      icon: <SiMysql className="skill-icon" />,
      
    },
    {
      name: 'React',
      icon: <FaReact className="skill-icon" />,
     
    }
  ];

  return (
    <div className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon-container">
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
