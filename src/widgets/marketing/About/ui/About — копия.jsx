import React from 'react';
import { useMediaQuery } from '../../../../shared/lib/hooks/useMediaQuery';
import { AboutDesktop } from './versions/AboutDesktop';
import { AboutTablet } from './versions/AboutTablet';
import { AboutMobile } from './versions/AboutMobile';

const About = () => {
  const isDesktop = useMediaQuery('(min-width: 1025px)');
  const isTablet = useMediaQuery('(min-width: 601px) and (max-width: 1024px)');

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  if (isDesktop) return <AboutDesktop fadeUp={fadeUp} />;
  if (isTablet) return <AboutTablet fadeUp={fadeUp} />;
  return <AboutMobile fadeUp={fadeUp} />;
};

export default About;
