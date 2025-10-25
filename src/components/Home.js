import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-content">
          <div className="home-image">
            <img 
              src="/Profile.jpg" 
              alt="Neha Sunil Jore" 
              className="profile-image"
            />
          </div>
          <div className="home-text">
            <h1 className="home-title">Hello, I'm Neha Sunil Jore</h1>
            <h2 className="home-subtitle">Fresher Software Developer</h2>
            <p className="home-description">
              Welcome to my portfolio! I am a passionate fresher software developer 
              with a strong foundation in web development technologies. I love creating 
              innovative solutions and learning new technologies to enhance my skills. 
              My goal is to contribute to meaningful projects and grow as a professional 
              developer in the tech industry.
            </p>
            <div className="home-buttons">
              <a href="about" className="btn btn-primary">Learn More About Me</a>
              <a href="contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
