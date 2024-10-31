import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <Features />
      <Benefits />
      <Pricing />
      <Footer />
    </div>
  );
};

export default LandingPage;
