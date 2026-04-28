import React from 'react';
import { PrIntro } from '../widgets/projects/PrIntro';
import { PrImpact } from '../widgets/projects/PrImpact';
import { PrFeatured } from '../widgets/projects/PrFeatured';
import { PrTrust } from '../widgets/projects/PrTrust';
import { PrGrid } from '../widgets/projects/PrGrid';
import { PrTestimonials } from '../widgets/projects/PrTestimonials';
import { CtaBlock } from '../widgets/marketing/CtaBlock';

const ProjectsPage = () => {
  return (
    <main className="projects-page">
      <PrIntro />
      <PrImpact />
      <PrFeatured />
      <PrTrust />
      <PrGrid />
      <PrTestimonials />
      <PrTrust>
        Sustaining the Future: We don’t just install technology; we engineer a lifelong promise of performance and unwavering partnership.
      </PrTrust>
      <CtaBlock variant="surface" btnVariant="dark" />
    </main>
  );
};

export default ProjectsPage;
