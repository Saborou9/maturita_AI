import React from 'react';

const Benefits = () => {
  return (
    <section id="benefits" className="bg-black py-20 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-green-500 p-2 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Increased Efficiency</h3>
                <p className="text-gray-400">Automate repetitive tasks and focus on what matters most to your business.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-500 p-2 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Cost Reduction</h3>
                <p className="text-gray-400">Minimize operational costs through intelligent automation and optimization.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-500 p-2 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Data-Driven Decisions</h3>
                <p className="text-gray-400">Make informed decisions based on real-time data and analytics.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Success Metrics</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-white mb-2">
                  <span>Efficiency Increase</span>
                  <span className="text-green-500">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 rounded-full h-2" style={{width: '85%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-white mb-2">
                  <span>Cost Reduction</span>
                  <span className="text-green-500">65%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 rounded-full h-2" style={{width: '65%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-white mb-2">
                  <span>Customer Satisfaction</span>
                  <span className="text-green-500">95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 rounded-full h-2" style={{width: '95%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
