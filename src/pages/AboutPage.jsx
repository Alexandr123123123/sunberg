import { AbHero } from '../widgets/about/AbHero';
import { AbPhilosophy } from '../widgets/about/AbPhilosophy';
import { AbManifesto } from '../widgets/about/AbManifesto';
import { AbValues } from '../widgets/about/AbValues';
import { AbTech } from '../widgets/about/AbTech';
import { AbStats } from '../widgets/about/AbStats';
import { AbTeam } from '../widgets/about/AbTeam';
import { AbTestimonials } from '../widgets/about/AbTestimonials';
import { AbCta } from '../widgets/about/AbCta';

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
      <AbTestimonials />
      <AbCta />
    </main>
  );
};

export default AboutPage;
