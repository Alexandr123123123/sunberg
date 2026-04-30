import React from 'react';
import { PrIntro } from '../widgets/projects/PrIntro';
import { PrImpact } from '../widgets/projects/PrImpact';
import { PrFeatured } from '../widgets/projects/PrFeatured';
import { PrTrust } from '../widgets/projects/PrTrust';
import { PrGrid } from '../widgets/projects/PrGrid';
// import { PrTestimonials } from '../widgets/projects/PrTestimonials';
import { Testimonials } from '../widgets/marketing/Testimonials';
import { CtaBlock } from '../widgets/marketing/CtaBlock';
import { testimonials as projectTestimonials } from '../shared/config/projects/projectsData';

const ProjectsPage = () => {
  // Map project testimonials to the format expected by the global Testimonials component
  // We omit avatar to show initials as on the main page
  const mappedTestimonials = projectTestimonials.map(t => ({
    text: t.content,
    name: t.author,
    role: t.role
  }));

  return (
    <main className="projects-page">
      <PrIntro />
      <PrImpact />
      <PrFeatured />
      <PrTrust />
      <PrGrid />
      {/* <PrTestimonials /> */}
      <Testimonials items={mappedTestimonials} showAvatar={true} />
      <PrTrust>



        Sustaining the Future: We don’t just install technology; we engineer a lifelong promise of performance and unwavering partnership.
      </PrTrust>
      <CtaBlock variant="surface" btnVariant="dark" />
    </main>
  );
};



export default ProjectsPage;
