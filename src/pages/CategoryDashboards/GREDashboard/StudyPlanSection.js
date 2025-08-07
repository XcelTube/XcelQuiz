// src/pages/CategoryDashboards/GREDashboard/StudyPlanSection.js

import React from 'react';

const StudyPlanSection = ({ studyPlan, darkMode }) => {
  return (
    <div className={`p-6 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className="text-2xl font-bold mb-6">Your Weekly Study Plan</h2>

      {/* Daily Tasks */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-6">
        {studyPlan.map((day, index) => (
          <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-indigo-50'}`}>
            <h3 className="font-bold mb-2">{day.day}</h3>
            <ul className="space-y-2">
              {day.tasks.map((task, i) => (
                <li key={i} className="flex items-start">
                  <input 
                    type="checkbox" 
                    className={`mt-1 mr-2 ${darkMode ? 'accent-indigo-400' : 'accent-indigo-600'}`}
                  />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex justify-between">
        <button className={`px-6 py-2 rounded-lg font-medium ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}>
          Download Plan
        </button>
        <button className="px-6 py-2 rounded-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          Generate New Plan
        </button>
      </div>
    </div>
  );
};

export default StudyPlanSection;
