import React from 'react';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';
import ServicesSection from '../components/ServicesSection';
import intelligence from '../img/intelligence.svg';
import datascience from '../img/DataScienceImg.png';
import webdev from '../img/webdev.png';
import uiux from '../img/uiux.png';

function AboutPage() {
  return (
    <div className='AboutPage'>
      <Title title={'About Me'} span={'About Me'}></Title>
      <ImageSection />
      <Title title={'My Skills'} span={'My Skills'}></Title>
      <div className='skills-section-container'>
        <SkillsSection skill={'HTML | JS | CSS '} progress={'80%'} />
        <SkillsSection skill={'React.js'} progress={'60%'} />
        <SkillsSection skill={'Node.js / Express.js'} progress={'50%'} />
        <SkillsSection skill={'MongoDB / Mongoose'} progress={'50%'} />
        <SkillsSection skill={'Python'} progress={'60%'} />
        <SkillsSection skill={'C++'} progress={'60%'} />
        <SkillsSection skill={'Java'} progress={'60%'} />
        <SkillsSection skill={'Swift'} progress={'60%'} />
        <SkillsSection skill={'X86 Assembly'} progress={'40%'} />
      </div>
      <Title title={'My Services'} span={'My Services'}></Title>
      <div className='services-container'>
        <ServicesSection
          image={webdev}
          title={'Web Dev'}
          text={'Professional web development using MERN technology stack.'}
        />
        <ServicesSection
          image={datascience}
          title={'Data Science'}
          text={'Cutting-edge data science & analytics using Python3.'}
        />
        <ServicesSection
          image={uiux}
          title={'UI / UX'}
          text={'Elegant and intuitive user interfaces and experiences.'}
        />
      </div>
    </div>
  );
}

export default AboutPage;
