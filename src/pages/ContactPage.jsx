import React from 'react';
import { ContactHero, ContactDetails, TrustBanner, InquiryForm } from '../widgets/contact';
import { Testimonials } from '../widgets/marketing/Testimonials';
import { PrTestimonials } from '../widgets/projects/PrTestimonials';
import { testimonials as projectTestimonials } from '../shared/config/projects/projectsData';


const ContactPage = () => {
  // Map project testimonials to the format expected by the global Testimonials component
  const mappedTestimonials = projectTestimonials.map(t => ({
    text: t.content,
    name: t.author,
    role: t.role
  }));

  return (
    <main className="contact-page">
      <ContactHero />
      <ContactDetails />
      <TrustBanner />
      <InquiryForm />
      {/* <PrTestimonials /> */}
      <Testimonials items={mappedTestimonials} showAvatar={true} />
    </main>

  );
};


export default ContactPage;
