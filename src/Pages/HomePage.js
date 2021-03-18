import React from 'react';
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import Particles from 'react-particles-js';

const HomePage = () => {
  return (
    <div className='HomePage'>
      <Particles
        className='particles-class'
        canvasClassName='HomePage'
        height='100vh'
        width='80vw'
        overFlow='false'
      />
      <header className='hero'>
        <h1 className='hero-text'>
          Hi, 👋🏼 I'm
          <span> Karsen</span>
        </h1>
        <p className='h-sub-text'>
          <Typed
            className='typed-text'
            strings={[
              'Computer Science Major',
              'Full-Stack Web Developer',
              'Software Developer',
              'Meme lord.',
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop={true}
          />
        </p>
        <div className='icons'>
          <a href='https://github.com/karsenh' className='icon-holder'>
            <FontAwesomeIcon icon={faGithub} className='icon gh' />
          </a>

          <a href='https://www.linkedin.com/in/karsenh' className='icon-holder'>
            <FontAwesomeIcon icon={faLinkedin} className='icon li' />
          </a>

          <a
            href='https://www.instagram.com/realkarsen'
            className='icon-holder'
          >
            <FontAwesomeIcon icon={faInstagram} className='icon ig' />
          </a>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
