import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SpringPromo } from './components/SpringPromo';
import { FallingLeaves } from './components/FallingLeaves';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { HowItWorks } from './components/HowItWorks';
import { WhatWeAccept } from './components/WhatWeAccept';
import { ServiceAreas } from './components/ServiceAreas';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Booking } from './components/Booking';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThankYou } from './components/ThankYou';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsAndConditions } from './components/TermsAndConditions';

function App() {
  const pathname = window.location.pathname;

  if (pathname === '/thank-you') {
    return <ThankYou />;
  }

  if (pathname === '/privacy-policy') {
    return <PrivacyPolicy />;
  }

  if (pathname === '/terms-and-conditions') {
    return <TermsAndConditions />;
  }

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <FallingLeaves />
      <Header />
      <div className="pt-24 md:pt-28">
        <SpringPromo />
        <main>
          <Hero />
          <Services />
          <Pricing />
          <HowItWorks />
          <WhatWeAccept />
          <ServiceAreas />
          <Features />
          <Testimonials />
          <Booking />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
