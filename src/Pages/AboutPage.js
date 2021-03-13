import React from 'react';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';

function AboutPage() {
  return (
    <div className='AboutPage'>
      <Title title={'About Me'} span={'About Me'}></Title>
      <ImageSection />
    </div>
  );
}

export default AboutPage;
