import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SpringPromo } from './components/SpringPromo';
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

function App() {
    if (window.location.pathname === '/thank-you') {
          return <ThankYou />;
    }

  return (
        <div className="min-h-screen bg-white scroll-smooth">
              <Header />
              <main className="pt-16 md:pt-20">
                      <SpringPromo />
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
              <Footer />
        </div>
      );
}

export default App;
