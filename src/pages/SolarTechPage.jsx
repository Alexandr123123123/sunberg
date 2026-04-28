import React from 'react';
import { TechHero, TechHistory } from '../widgets/tech';

const SolarTechPage = () => {
  return (
    <main className="tech-page">
      <TechHero />
      <TechHistory />
    </main>
  );
};

export default SolarTechPage;
