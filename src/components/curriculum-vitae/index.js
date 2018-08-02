import React from 'react';
import AboutMe from './about-me';
import Contact from './contact';
import Header from './header';
import Skills from './skills';
import WorkExperience from './work-experience';
import OwnProjects from './own-projects';
import Footer from './footer';
import { basicInfo, contact, skills, workExperience, ownProjects } from 'data';
import './styles.css';

const CurriculumVitae = () => (
  <div className='curriculum-vitae'>
    <Header
      name={basicInfo.name}
      surname={basicInfo.surname}
      title={basicInfo.title} />

    <Contact values={contact} />
    <AboutMe />
    <Skills skills={skills} />
    <WorkExperience values={workExperience} />
    <OwnProjects values={ownProjects} />
    <Footer />
  </div>
);

export default CurriculumVitae;
