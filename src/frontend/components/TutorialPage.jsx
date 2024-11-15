import React from 'react';
import Navbar from './Navbar';

const TutorialPage = () => {
  return (
    <>
        <Navbar />
        <div className="bg-black text-white min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-6 py-10">
            <h1 className="text-4xl font-bold mb-8 text-center">
            How to Ask the Best Questions
            </h1>

            <p className="text-gray-400 text-lg text-center mb-12">
            Get the most accurate and helpful responses by asking the right questions. Here's how you can ensure that our AI provides you with insightful and actionable answers.
            </p>

            <div className="space-y-8">
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-green-500 mb-4">
                1. Be Specific
                </h2>
                <p className="text-gray-400">
                Provide clear details about your query. For example, instead of asking "What’s trending?", try asking "What are the latest trends in AI for small businesses in 2024?"
                </p>
            </div>

            <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-green-500 mb-4">
                2. Focus on One Question
                </h2>
                <p className="text-gray-400">
                Keep your question focused on a single topic to get a detailed and precise response. For example, ask "How can I optimize my digital marketing?" rather than "What are some business tips?"
                </p>
            </div>

            <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-green-500 mb-4">
                3. Use Keywords
                </h2>
                <p className="text-gray-400">
                Include relevant keywords in your question to guide the AI. For instance, use terms like "digital marketing", "automation tools", or "customer engagement" to help narrow the scope.
                </p>
            </div>
            </div>

            <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-6">
                Examples of Good Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
                <p className="text-gray-400">
                    <strong>Good Question:</strong> "What are the latest trends in AI for small businesses in 2024?"
                </p>
                </div>
                <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
                <p className="text-gray-400">
                    <strong>Good Question:</strong> "What are the top digital marketing tools for startups?"
                </p>
                </div>
                <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
                <p className="text-gray-400">
                    <strong>Good Question:</strong> "How can I expand my audience in the tech industry?"
                </p>
                </div>
                <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
                <p className="text-gray-400">
                    <strong>Good Question:</strong> "What strategies can I use to improve customer retention?"
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </>
  );
};

export default TutorialPage;
