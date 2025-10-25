import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I am Neha Sunil Jore, a passionate fresher software developer with a strong 
              foundation in computer science and programming. I am enthusiastic about 
              creating innovative solutions and continuously learning new technologies 
              to enhance my development skills.
            </p>
            <div className="resume-section">
              <a 
                href="https://drive.google.com/file/d/1a1TYR18rNLnVg51Ibc2OUwS_aW3YVHId/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="resume-btn"
              >
                View My Resume
              </a>
            </div>
          </div>
          
          <div className="education-section">
            <h3 className="education-title">Education</h3>
            <div className="education-timeline">
              <div className="education-item">
                <div className="education-year">2020 - 2024</div>
                <div className="education-details">
                  <h4>Bachelor of Technology (B.E)</h4>
                  <p>Computer Science Engineering</p>
                  <p>Savitribai Phule Pune University</p>
                  <p>CGPA: 7.99/10</p>
                </div>
              </div>
              
              <div className="education-item">
                <div className="education-year">2018 - 2020</div>
                <div className="education-details">
                  <h4>Higher Secondary (12th)</h4>
                  <p>Science Stream</p>
                  <p>Pune</p>
                  <p>Percentage: 63%</p>
                </div>
              </div>
              
              <div className="education-item">
                <div className="education-year">2016 - 2018</div>
                <div className="education-details">
                  <h4>Secondary School (10th)</h4>
                  <p>General Studies</p>
                  <p>Pune</p>
                  <p>Percentage: 83%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
