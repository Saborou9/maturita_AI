import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';

const LandingPage = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <Features />
    </div>
  );
};

export default LandingPage;
