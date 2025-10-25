import React from 'react';
import { FaCertificate, FaCalendarAlt } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: ' JavaFull Stack Development',
      issuer: 'The Kiran Academy',
      date: '2025',
      description: 'Comprehensive course covering frontend and backend development technologies including React, Node.js, and databases.'
    }
   
  ];

  return (
    <div className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="cert-icon">
                <FaCertificate />
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <div className="cert-date">
                  <FaCalendarAlt />
                  <span>{cert.date}</span>
                </div>
                <p className="cert-description">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
