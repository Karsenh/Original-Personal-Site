import React from 'react';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';
import ServicesSection from '../components/ServicesSection';
import design from '../img/design.svg';

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
      <div className='services-container'>
        <ServicesSection
          image={design}
          title={'Web Design'}
          text={'Professional Full-Stack Web Development'}
        />
        <ServicesSection
          image={design}
          title={'Data Science'}
          text={'Cutting-edge Python data science and analytics'}
        />
        <ServicesSection
          image={design}
          title={'UI / UX'}
          text={'Intuitive and Elegant UI/UX Design'}
        />
      </div>
    </div>
  );
}

export default AboutPage;
