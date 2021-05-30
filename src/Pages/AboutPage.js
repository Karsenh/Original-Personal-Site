import React from 'react';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';
import ServicesSection from '../components/ServicesSection';
import datascience from '../img/DataScienceImg.png';
import webdev from '../img/webdev.png';
import uiux from '../img/uiux.png';

function AboutPage() {
  return (
    <div className='AboutPage'>
      {/* ABOUT ME */}
      <Title title={'About Me'} span={'About Me'}></Title>
      <ImageSection />

      {/* SKILLS */}
      <Title title={'My Skills'} span={'My Skills'}></Title>
      <div className='skills-section-container'>
        <SkillsSection skill={'Teamwork & Communication'} progress={'100%'} />
        <SkillsSection skill={'HTML | JS | CSS '} progress={'75%'} />
        <SkillsSection skill={'Python'} progress={'70%'} />
        <SkillsSection skill={'React.js'} progress={'65%'} />
        <SkillsSection skill={'Swift'} progress={'60%'} />
        <SkillsSection skill={'Node.js / Express.js'} progress={'50%'} />
        <SkillsSection skill={'MongoDB / Mongoose'} progress={'50%'} />
        <SkillsSection skill={'Photoshop'} progress={'70%'} />
      </div>

      {/* SERVICES */}
      <Title title={'My Services'} span={'My Services'}></Title>
      <div className='services-container'>
        <ServicesSection
          image={webdev}
          title={'Web Dev'}
          text={'Professional full-stack web development.'}
        />
        <ServicesSection
          image={datascience}
          title={'Data Science'}
          text={'Cutting-edge data science & analytics using Python.'}
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
