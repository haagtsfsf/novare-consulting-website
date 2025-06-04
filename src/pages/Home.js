import React from 'react';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import ValueProposition from '../components/ValueProposition';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesOverview />
      <ValueProposition />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default Home;
