import React from 'react';
import { PrIntro } from '../widgets/projects/PrIntro';
import { PrImpact } from '../widgets/projects/PrImpact';
import { PrGrid } from '../widgets/projects/PrGrid';

const ProjectsPage = () => {
  return (
    <main className="projects-page">
      <PrIntro />
      <PrImpact />
      <PrGrid />
    </main>
  );
};

export default ProjectsPage;
