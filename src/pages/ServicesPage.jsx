import React, { useState } from 'react';
import { SpHero } from '../widgets/services/SpHero';
import { SpSectors } from '../widgets/services/SpSectors';
import { SpTechBanner } from '../widgets/services/SpTechBanner';
import { SpSolutions } from '../widgets/services/SpSolutions';
import { SpDeepDive } from '../widgets/services/SpDeepDive';
import { SpHardware } from '../widgets/services/SpHardware';
import { SpCaseStudy } from '../widgets/services/SpCaseStudy';
import { Faq } from '../widgets/support/Faq';
import { SpBottomCta } from '../widgets/services/SpBottomCta';

/* ── Animation Variants ───────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

/* ── Component ────────────────────────────────── */
const ServicesPage = () => {
  const [activeTabs, setActiveTabs] = useState({
    'design-block': 'analysis',
    'integration-block': 'modules',
    'analytics-block': 'monitoring',
  });

  const handleTabChange = (blockId, tabId) => {
    setActiveTabs(prev => ({ ...prev, [blockId]: tabId }));
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="services-page">
      <SpHero />
      <SpSectors fadeUp={fadeUp} scrollToSection={scrollToSection} />
      <SpTechBanner />
      <SpSolutions fadeUp={fadeUp} />
      <SpDeepDive
        fadeUp={fadeUp}
        activeTabs={activeTabs}
        handleTabChange={handleTabChange}
      />
      <SpHardware fadeUp={fadeUp} />
      <SpCaseStudy fadeUp={fadeUp} />
      <Faq fadeUp={fadeUp} />
      <SpBottomCta fadeUp={fadeUp} />
    </main>
  );
};

export default ServicesPage;
