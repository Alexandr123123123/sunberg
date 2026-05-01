import React from 'react';
import { useTranslation } from 'react-i18next';
import { PrIntro } from '../widgets/projects/PrIntro';
import { PrImpact } from '../widgets/projects/PrImpact';
import { PrFeatured } from '../widgets/projects/PrFeatured';
import { PrTrust } from '../widgets/projects/PrTrust';
import { PrGrid } from '../widgets/projects/PrGrid';
import { Testimonials } from '../widgets/marketing/Testimonials';
import { CtaBlock } from '../widgets/marketing/CtaBlock';

const ProjectsPage = () => {
  const { t } = useTranslation();
  const projectTestimonials = t('projectsPage.testimonials', { returnObjects: true });

  return (
    <main className="projects-page">
      <PrIntro />
      <PrImpact />
      <PrFeatured />
      <PrTrust />
      <PrGrid />
      <Testimonials items={projectTestimonials} showAvatar={true} />
      <PrTrust>
        {t('projectsPage.trustSecond')}
      </PrTrust>
      <CtaBlock variant="surface" btnVariant="dark" />
    </main>
  );
};

export default ProjectsPage;
