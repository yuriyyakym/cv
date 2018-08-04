import React from 'react';
import AboutMe from './about-me';
import Contact from './contact';
import Header from './header';
import Skills from './skills';
import WorkExperience from './work-experience';
import OwnProjects from './own-projects';
import Footer from './footer';
import { aboutMe, basicInfo, contact, skills, workExperience, ownProjects } from 'data';
import './styles.css';

const CurriculumVitae = () => (
  <page className='curriculum-vitae'>
    <Header
      name={basicInfo.name}
      surname={basicInfo.surname}
      title={basicInfo.title} />

    <Contact {...contact} />
    {/*<AboutMe value={aboutMe} />*/}
    <Skills skills={skills} />
    <OwnProjects values={ownProjects} />
    <WorkExperience values={workExperience} />
    {/*<Footer />*/}
  </page>
);

export default CurriculumVitae;
