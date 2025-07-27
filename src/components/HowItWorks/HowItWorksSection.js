import React from 'react';
import { User, CheckCircle, TrendingUp } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          How XcelQuiz Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-lg mb-6">
              <User className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Sign Up & Get Started
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Create your free XcelQuiz account in minutes and personalize your profile to begin your learning journey.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-lg mb-6">
              <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Explore or Create Quizzes
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Dive into our vast library of quizzes or use the intuitive builder to craft your own custom assessments.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg mb-6">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Test Your Knowledge
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Challenge yourself with interactive quizzes, earn points, and unlock rewards as you progress.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Track Your Progress
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Monitor your performance with detailed analytics and identify areas for improvement and mastery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;


