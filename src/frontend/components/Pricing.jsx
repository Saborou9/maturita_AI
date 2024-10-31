import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="bg-black py-20 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-gray-900 rounded-lg p-8 hover:transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-bold text-white mb-4">Starter</h3>
            <div className="text-4xl font-bold text-white mb-6">
              $49<span className="text-lg font-normal text-gray-400">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Basic AI Analysis
              </li>
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                5 Projects
              </li>
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Basic Support
              </li>
            </ul>
            <button className="w-full bg-green-500 text-white py-3 rounded-full hover:bg-green-600 transition">
              Get Started
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-gray-900 rounded-lg p-8 transform scale-105 border-2 border-green-500">
            <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-lg">Popular</div>
            <h3 className="text-xl font-bold text-white mb-4">Professional</h3>
            <div className="text-4xl font-bold text-white mb-6">
              $99<span className="text-lg font-normal text-gray-400">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Advanced AI Analysis
              </li>
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Unlimited Projects
              </li>
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                24/7 Priority Support
              </li>
            </ul>
            <button className="w-full bg-green-500 text-white py-3 rounded-full hover:bg-green-600 transition">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gray-900 rounded-lg p-8 hover:transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-bold text-white mb-4">Enterprise</h3>
            <div className="text-4xl font-bold text-white mb-6">
              Custom<span className="text-lg font-normal text-gray-400">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Custom AI Solutions
              </li>
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Dedicated Account Manager
              </li>
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Custom Integration
              </li>
            </ul>
            <button className="w-full bg-green-500 text-white py-3 rounded-full hover:bg-green-600 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
