import { useTranslation } from 'react-i18next';
import { AbHero } from '../widgets/about/AbHero';
import { AbPhilosophy } from '../widgets/about/AbPhilosophy';
import { AbManifesto } from '../widgets/about/AbManifesto';
import { AbValues } from '../widgets/about/AbValues';
import { AbTech } from '../widgets/about/AbTech';
import { AbStats } from '../widgets/about/AbStats';
import { AbTeam } from '../widgets/about/AbTeam';
// import { AbTestimonials } from '../widgets/about/AbTestimonials';
import Testimonials from '../widgets/marketing/Testimonials/ui/Testimonials';
import { CtaBlock } from '../widgets/marketing/CtaBlock';

const AboutPage = () => {
  const { t } = useTranslation();
  const aboutTestimonials = t('aboutPage.testimonials', { returnObjects: true });

  return (
    <main className="about-page">
      <AbHero />
      <AbPhilosophy />
      <AbManifesto />
      <AbTech />
      <AbValues />
      <AbStats />
      <AbTeam />
      {/* <AbTestimonials /> */}
      <Testimonials items={aboutTestimonials} />
      <CtaBlock variant="surface" />
    </main>
  );
};

export default AboutPage;
