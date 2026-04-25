import React from 'react';
import { ContactHero, ContactDetails, TrustBanner, InquiryForm } from '../widgets/contact';
import { PrTestimonials } from '../widgets/projects/PrTestimonials';

const ContactPage = () => {
  return (
    <main className="contact-page">
      <ContactHero />
      <ContactDetails />
      <TrustBanner />
      <InquiryForm />
      <PrTestimonials />
    </main>
  );
};

export default ContactPage;
