import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-black min-h-screen w-full flex flex-col justify-center items-center text-center pt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Transform Your Business
          <span className="text-green-500"> With AI</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Harness the power of artificial intelligence to analyze, optimize, and grow your business with data-driven insights.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/signup"
            className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition transform hover:scale-105"
          >
            Start Free Trial
          </a>
          <a
            href="#"
            className="border border-green-500 text-green-500 px-8 py-4 rounded-full font-semibold hover:bg-green-500 hover:text-white transition transform hover:scale-105"
          >
            Watch Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
