import React from 'react';
import aboutImg from '../img/about-2-img.jpg';

function ImageSection() {
  return (
    <div className='ImageSection'>
      <div className='img'>
        <img src={aboutImg} alt='' />
      </div>
      <div className='about-info'>
        <h4>
          I am {'{ '} <span>Karsen</span> {' }'}
        </h4>
        <p className='about-text'>
          <em>Gonzaga University</em> graduate with a passion for anything that
          has to do with computers, <strong>Full Stack Web-Development</strong>{' '}
          and <strong>Data Science</strong> in particular.
        </p>
        <div className='about-details'>
          <div className='left-section'>
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Degrees</p>
          </div>
          <div className='right-section'>
            <p>: Karsen Hansen</p>
            <p>: 27</p>
            <p>: Danish American</p>
            <p>: English, Danish</p>
            <p>: Liberty Lake, WA</p>
            <p>
              {' '}
              Associates of Science & Bachelors in Computer Science (Honors)
            </p>
          </div>
        </div>
        <button className='btn'>Download</button>
      </div>
    </div>
  );
}

export default ImageSection;
