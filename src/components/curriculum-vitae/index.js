import React from 'react';
import Contact from './contact';
import Header from './header';
import Skills from './skills';
import WorkExperience from './work-experience';
import OwnProjects from './own-projects';
import { basicInfo, contact, skills, workExperience, ownProjects } from 'data';
import './styles.css';

const CurriculumVitae = () => (
  <page className='curriculum-vitae'>
    <Header {...basicInfo} />
    <Contact {...contact} />
    <Skills skills={skills} />
    <OwnProjects values={ownProjects} />
    <WorkExperience values={workExperience} />
  </page>
);

export default CurriculumVitae;
