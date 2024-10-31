import React from 'react';

const Features = () => {
  return (
    <section id="features" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Powerful Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "AI-Powered Analysis",
              description: "Advanced algorithms analyze your business data to provide meaningful insights",
              icon: "📊"
            },
            {
              title: "Real-time Monitoring",
              description: "Track your business metrics and get instant notifications about important changes",
              icon: "⚡"
            },
            {
              title: "Smart Recommendations",
              description: "Receive personalized suggestions to improve your business performance",
              icon: "💡"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg hover:transform hover:scale-105 transition duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
