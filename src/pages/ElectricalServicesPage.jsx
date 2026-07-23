import React from 'react';
import { ElHero, ElCategories, ElPortfolio, ElReviews } from '../widgets/services-electrical';

const ElectricalServicesPage = () => {
  return (
    <main className="electrical-services-page">
      <ElHero />
      <ElCategories />
      <ElPortfolio />
      <ElReviews />
    </main>
  );
};

export default ElectricalServicesPage;
