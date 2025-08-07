// src/pages/CategoryDashboards/GREDashboard/ProgressTabSection.js

import React from 'react';

const ProgressTabSection = ({ darkMode }) => {
  const cardStyle = `p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-indigo-50'}`;

  return (
    <div className={`p-6 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className="text-2xl font-bold mb-6">Your Progress</h2>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className={cardStyle}>
          <h3 className="text-lg font-bold mb-4">Score Trend</h3>
          <div className="h-64 flex items-center justify-center border rounded-lg">
            <p className="text-gray-500">Score chart will appear here</p>
          </div>
        </div>

        <div className={cardStyle}>
          <h3 className="text-lg font-bold mb-4">Skill Analysis</h3>
          <div className="space-y-4">
            {[
              { skill: "Text Completion", percent: 72, color: "green-500" },
              { skill: "Reading Comprehension", percent: 58, color: "yellow-500" },
              { skill: "Algebra", percent: 85, color: "green-500" },
              { skill: "Geometry", percent: 63, color: "yellow-500" },
            ].map(({ skill, percent, color }, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span>{skill}</span>
                  <span>{percent}%</span>
                </div>
                <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                  <div className={`h-2 rounded-full bg-${color}`} style={{ width: `${percent}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className={cardStyle}>
        <h3 className="text-lg font-bold mb-4">Achievements</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "🏆", label: "Quant Master", bg: "bg-yellow-100", text: "text-yellow-600" },
            { icon: "📚", label: "Vocab Builder", bg: "bg-blue-100", text: "text-blue-600" },
            { icon: "🔥", label: "7-Day Streak", bg: "bg-green-100", text: "text-green-600" },
            { icon: "⏱️", label: "Speed Demon", bg: "bg-purple-100", text: "text-purple-600" },
          ].map(({ icon, label, bg, text }, i) => (
            <div key={i} className="text-center">
              <div className={`w-16 h-16 mx-auto rounded-full ${bg} ${text} flex items-center justify-center text-2xl mb-2`}>
                {icon}
              </div>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressTabSection;
