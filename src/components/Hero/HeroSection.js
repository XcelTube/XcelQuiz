import React from 'react';
import { BarChart3, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Ignite Your Knowledge, Elevate Your Score.
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Ready to test your knowledge, master new subjects, and earn exciting rewards?
          XcelQuiz is your ultimate learning companion.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Start Quiz
          </button>

          {/* ✅ Replace <a> with Link for proper SPA routing */}
          <Link
            to="/quizbuilder"
            className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center space-x-2"
          >
            <Settings className="w-4 h-4" />
            <span>Create a Quiz</span>
          </Link>

          <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            View Drafts
          </button>
          <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center space-x-2">
            <BarChart3 className="w-4 h-4" />
            <span>Quiz Analytics</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
