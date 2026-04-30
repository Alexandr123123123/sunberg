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

const aboutTestimonials = [
  {
    text: "Sunberg's architectural approach to solar was exactly what we needed for our heritage property. They respected the design while delivering cutting-edge efficiency.",
    name: "Lars Svensson",
    role: "Private Homeowner"
  },
  {
    text: "The level of precision in their engineering is unmatched. Our industrial facility now runs on 100% clean energy with zero downtime during the transition.",
    name: "Ingrid Berg",
    role: "Operations Director, EcoLogistics"
  },
  {
    text: "Working with Erik and his team was a seamless experience. They don't just sell panels; they design long-term energy independence.",
    name: "Anders Holm",
    role: "Founder, Alpine Heights"
  }
];

const AboutPage = () => {
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
