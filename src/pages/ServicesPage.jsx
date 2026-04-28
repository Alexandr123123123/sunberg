import React from 'react';
import { SpHero } from '../widgets/services/SpHero';
import { SpSectors } from '../widgets/services/SpSectors';
import { SpTechBanner } from '../widgets/services/SpTechBanner';
import { SpFloatBanner } from '../widgets/services/SpFloatBanner';
import { SpSolutions } from '../widgets/services/SpSolutions';
import { SpDeepDive } from '../widgets/services/SpDeepDive';
import { SpHardware } from '../widgets/services/SpHardware';
import { SpCaseStudy } from '../widgets/services/SpCaseStudy';
import { Faq } from '../widgets/support/Faq';
import { CtaBlock } from '../widgets/marketing/CtaBlock';
import { useSmoothScroll } from '../features/navigation-scroll';
import { useServiceTabs } from '../features/service-tabs-control';

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
  const { scrollToSection } = useSmoothScroll();
  const { activeTabs, handleTabChange } = useServiceTabs({
    'design-block': 'analysis',
    'integration-block': 'modules',
    'analytics-block': 'support',
  });

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
      <SpFloatBanner />
      <SpHardware fadeUp={fadeUp} />
      {/* <SpCaseStudy fadeUp={fadeUp} /> */}
      <Faq fadeUp={fadeUp} />
      <CtaBlock variant="primary" />
    </main>
  );
};

export default ServicesPage;
