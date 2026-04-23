import React from 'react';
import { PrIntro } from '../widgets/projects/PrIntro';
import { PrImpact } from '../widgets/projects/PrImpact';
import { PrFeatured } from '../widgets/projects/PrFeatured';
import { PrTrust } from '../widgets/projects/PrTrust';
import { PrGrid } from '../widgets/projects/PrGrid';
import { PrTestimonials } from '../widgets/projects/PrTestimonials';
import { CtaBanner } from '../widgets/marketing/CtaBanner';

const ProjectsPage = () => {
  return (
    <main className="projects-page">
      <PrIntro />
      <PrImpact />
      <PrFeatured />
      <PrTrust />
      <PrGrid />
      <PrTestimonials />
      <PrTrust paddingTop="25px">
        A partnership for the long term: We provide lifetime monitoring and technical support for every project we deliver.
      </PrTrust>
      <CtaBanner />
    </main>
  );
};

export default ProjectsPage;
