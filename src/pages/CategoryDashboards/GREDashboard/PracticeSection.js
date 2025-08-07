// src/pages/CategoryDashboards/GREDashboard/PracticeSection.js

import React from 'react';

const PracticeSection = ({ darkMode }) => {
  const testCardStyle = `p-6 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`;

  return (
    <div className={`p-6 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className="text-2xl font-bold mb-6">Practice Tests</h2>

      {/* Test Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className={testCardStyle}>
          <h3 className="text-xl font-bold mb-3">Full-Length Mock Test</h3>
          <p className="mb-4">Simulate the actual GRE test experience with timed sections and breaks.</p>
          <button className={`w-full py-2 rounded-lg font-medium ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'}`}>
            Start Full Test (3h 45m)
          </button>
        </div>
        <div className={testCardStyle}>
          <h3 className="text-xl font-bold mb-3">Verbal Reasoning</h3>
          <p className="mb-4">Practice with 2 sections (30 questions, 60 minutes total).</p>
          <button className={`w-full py-2 rounded-lg font-medium ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'}`}>
            Start Verbal Test (1h)
          </button>
        </div>
        <div className={testCardStyle}>
          <h3 className="text-xl font-bold mb-3">Quantitative Reasoning</h3>
          <p className="mb-4">Practice with 2 sections (30 questions, 70 minutes total).</p>
          <button className={`w-full py-2 rounded-lg font-medium ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'}`}>
            Start Quant Test (1h 10m)
          </button>
        </div>
      </div>

      {/* Results Note */}
      <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-indigo-50'}`}>
        <h3 className="text-xl font-bold mb-3">Recent Test Results</h3>
        <p>You haven't taken any tests yet. Start your first practice test to track your progress!</p>
      </div>
    </div>
  );
};

export default PracticeSection;
