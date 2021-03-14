import React from 'react';

function ServicesSection({ image, title, text }) {
  return (
    <div className='services-section'>
      <div className='service'>
        <div className='service-content'>
          <img src={image} alt='Service Image' />
          <h5 className='s-title'>{title}</h5>
          <p className='s-text'>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
