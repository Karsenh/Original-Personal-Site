import React from 'react';
import aboutImg from '../img/about2.jpg';

function ImageSection() {
  return (
    <div className='ImageSection'>
      <div className='img'>
        <img src={aboutImg} alt='' />
      </div>
      <div className='about-info'>
        <h4>
          I am<span> Lorem Ipsum</span>
        </h4>
        <p>
          Lorem ipsum dolor perferendis numquam dolorem cumque facilis. Desir
          per po latte date cor inthiumenu por casa favor as ther thenamy
          asgardian forte comme sem le
        </p>
        <div className='about-details'>Come back to this later...</div>
      </div>
    </div>
  );
}

export default ImageSection;
