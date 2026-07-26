import React from 'react';
import { TechHero, TechHistory, TechGallery, TechGalleryMobile, TechGalleryMobileXS, PanelTypes, InverterTypes, BatteryStorage, SafetyAndFuses, MountingSystems } from '../widgets/tech';

const SolarTechPage = () => {
  return (
    <main className="tech-page">
      <TechHero />
      <TechHistory />
      
      <div className="desktop-only-gallery">
        <TechGallery />
      </div>
      
      <div className="tablet-only-gallery">
        <TechGalleryMobile />
      </div>

      <div className="mobile-small-gallery">
        <TechGalleryMobileXS />
      </div>

      <PanelTypes />
      <InverterTypes />
      <BatteryStorage />
      <SafetyAndFuses />
      <MountingSystems />
    </main>
  );
};

export default SolarTechPage;

