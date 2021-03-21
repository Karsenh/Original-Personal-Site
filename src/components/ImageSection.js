import React from 'react';
import aboutImg from '../img/about-img-2.png';
import myPDF from '../myResume.pdf';

function ImageSection() {
  const downloadFile = () => {
    window.location.href = myPDF;
  };

  return (
    <div className='ImageSection'>
      <div className='img'>
        <img src={aboutImg} alt='' />
      </div>
      <div className='about-info'>
        <h4>
          I'm {'{ '} <span>Karsen</span> {' }'}
        </h4>
        <p className='about-text'>
          <em>Gonzaga University</em> graduate & lifelong student of
          programming. I have a passion for{' '}
          <strong>Full-Stack Web Development</strong>,{' '}
          <strong>Data Science</strong>, & <strong>Software Development</strong>
          . If you're ever curious what I'm up to, just check my GitHub.
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
            <p>: Liberty Lake, WA (the matrix)</p>
            <p>
              {' '}
              Associates of Science & Bachelors in Computer Science ( 3.8GPA )
            </p>
          </div>
        </div>
        <button onClick={downloadFile} className='btn'>
          Download
        </button>
      </div>
    </div>
  );
}

export default ImageSection;
