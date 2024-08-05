import React, { useEffect, useRef } from 'react';
import { Container, Typography, Box } from '@mui/material';
import DvsC from './DvsC.png'
import { faBriefcase, faEnvelope, faFile, faPersonShelter, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typed from 'typed.js';
const Home: React.FC = () => {

  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const options = {
      strings: ['Web Developer', 'Frontend Developer', 'Web Designer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (

    <>
      <div className="home-nav">
        

        <div className="first-sec">
          <div className="emai-and-sun">
            <FontAwesomeIcon icon={faEnvelope} /> <p className='email-text'>archieparliya687@gmail.com</p>
          </div>
          <div className="sun-home">
            <FontAwesomeIcon icon={faSun} />
          </div>
        </div>

        <div className="second-sec">
          <a href="https://github.com/archie687" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faBriefcase} />
            <p className='email-text'>Works</p>
          </a>
          <a href="https://drive.google.com/drive/my-drive" target="_blank" rel="noopener noreferrer" className="resume-link">
            <div className="resume">
              <FontAwesomeIcon icon={faFile} />
              <p className='email-text'>Resume</p>
            </div>
          </a>
          <div className="shelf">
            <FontAwesomeIcon icon={faPersonShelter} /> <p className='email-text'>Shelf</p>
          </div>
        </div>

      </div>

      <div className="main-home">
        <div className="left">
          Hi, My name is <span className='archie'>Archie</span>
          <div>I am a Passionate</div>
          
          <span id='element' ref={typedElement}></span>

          <div className='home-left-text'>
            A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.
          </div>

          <div className="home-left-bottom">
            <div className="first">
              <span className="gradient-text">&lt;designer&gt;</span>
              <p className='home-left-bottom-first'>Product designer specializing in UI design and design system.</p>
            </div>
       
            <div className="scnd">
              &lt;Coder&gt;
              <p className='home-left-bottom-scnd'>Frontend developer who writes clean and efficient code.</p>
            </div>
          </div>

        </div>

        <div className="right">
          <img className='archie-img' src={DvsC} alt="" />
        </div>
      </div>

    </>

  );
};

export default Home;