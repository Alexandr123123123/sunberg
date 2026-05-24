import React from 'react';
import { TechHero, TechHistory, SystemComponents, ConnectionSchemes, PanelTypes, InverterTypes, BatteryStorage, SafetyAndFuses, MountingSystems } from '../widgets/tech';

const SolarTechPage = () => {
  return (
    <main className="tech-page">
      <TechHero />
      <TechHistory />
      <SystemComponents />
      <ConnectionSchemes />
      <PanelTypes />
      <InverterTypes />
      <BatteryStorage />
      <SafetyAndFuses />
      <MountingSystems />
    </main>
  );
};

export default SolarTechPage;
