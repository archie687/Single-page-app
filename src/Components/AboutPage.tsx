import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Skill from './skill.png';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const AboutPage: React.FC = () => {
  return (
    <>
    
      <h1 className='about-h1' >Frontend Developer</h1>

      <div className="about-main">

        <div className="about-right">
          <div className="cards">
            <div className="card" style={{ width: '18rem' }}>
            
              <div className="card-body">
                <h5 className="card-title">C++</h5>
                <p className="card-text">Explore the versatility of C++ through practical examples, enhancing your understanding and mastery of this powerful programming language.</p>
                
              </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
              
              <div className="card-body">
                <h5 className="card-title">HTML</h5>
                <p className="card-text">Discover how HTML structures web pages by using example elements and attributes to create meaningful and accessible content.</p>
               
              </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
              
              <div className="card-body">
                <h5 className="card-title">CSS</h5>
                <p className="card-text">Learn how CSS styles web pages by applying example rules and properties to enhance the visual presentation and layout.</p>
               
              </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
             
              <div className="card-body">
                <h5 className="card-title">JavaScript</h5>
                <p className="card-text">Explore the dynamic capabilities of JavaScript through example scripts that add interactivity and functionality to web pages.</p>
                
              </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
              
              <div className="card-body">
                <h5 className="card-title">Tailwind CSS</h5>
                <p className="card-text">Utilize the power of Tailwind CSS with example utility classes to rapidly build modern and responsive web designs.</p>
               
              </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
             
              <div className="card-body">
                <h5 className="card-title">SQL</h5>
                <p className="card-text">Master SQL with practical examples that demonstrate how to query and manage databases effectively.</p>
               
              </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
             
              <div className="card-body">
                <h5 className="card-title">Bootstrap</h5>
                <p className="card-text">Leverage Bootstrap's powerful framework with example components and utilities to create responsive, mobile-first web designs.</p>
                
              </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
             
              <div className="card-body">
                <h5 className="card-title">React</h5>
                <p className="card-text">Dive into React with example components and hooks to build dynamic and interactive user interfaces.</p>
               
              </div>
            </div>
          </div>
        </div>


        <div className="contact-about">
          <FontAwesomeIcon icon={faTwitter} style={{ color: "#74C0FC", }} />
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#ec8e6f", }} />
          <FontAwesomeIcon icon={faFacebook} style={{ color: "#2055b1", }} />
          <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#49e463", }} />
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#1c61d9", }} />
          <FontAwesomeIcon icon={faGithub} />

        </div>

      </div>

    </>
  );
};

export default AboutPage;