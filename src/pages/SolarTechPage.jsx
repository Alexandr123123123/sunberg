import React from 'react';
import { TechHero, TechHighlight } from '../widgets/tech';

const SolarTechPage = () => {
  return (
    <main className="tech-page">
      <TechHero />
      <TechHighlight />
      {/* Additional sections will be added here */}
    </main>
  );
};

export default SolarTechPage;
