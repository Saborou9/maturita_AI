import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-black py-20 flex flex-col justify-center items-center text-center">
      {/* Headline */}
      <h1 className="text-5xl font-bold text-white mb-4">
        Revolutionize Your Business Insights
      </h1>

      {/* Subheading */}
      <p className="text-lg text-gray-400 max-w-2xl mb-6">
        Our AI-powered chatbot helps businesses better understand their market, identify internal flaws, and provide actionable insights for business success.
      </p>

      {/* Call to Action */}
      <div>
        <a
          href="#"
          className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
