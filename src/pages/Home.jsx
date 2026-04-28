import React from 'react';
import { Hero } from '../widgets/marketing/Hero';
import { Revolution } from '../widgets/marketing/Revolution';
import { About } from '../widgets/marketing/About';
import { Partners } from '../widgets/marketing/Partners';
import { CtaBlock } from '../widgets/marketing/CtaBlock';
import { Services } from '../widgets/marketing/Services';
import { TrustStrip } from '../widgets/marketing/TrustStrip';
import { HowItWorks } from '../widgets/marketing/HowItWorks';
import { Projects } from '../widgets/marketing/Projects';
import { Testimonials } from '../widgets/marketing/Testimonials';
import { Faq } from '../widgets/support/Faq';
import { Contact } from '../widgets/marketing/Contact';

const Home = () => (
  <main>
    <Hero />
    <Revolution />
    <Partners />
    <About />
    <CtaBlock variant="surface" />
    <Services />
    <TrustStrip />
    <HowItWorks />
    <Projects />
    <Testimonials />
    <Faq />
    <Contact />
  </main>
);

export default Home;
