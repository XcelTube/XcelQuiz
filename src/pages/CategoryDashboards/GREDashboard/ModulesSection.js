// src/pages/CategoryDashboards/GREDashboard/ModulesSection.js

import React from 'react';

const ModulesSection = ({ modules, darkMode }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">GRE Preparation Modules</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {modules.map((module, index) => (
          <div key={index} className={`rounded-lg shadow-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            {/* Header */}
            <div className={`p-6 ${darkMode ? 'bg-gray-700' : 'bg-indigo-600 text-white'}`}>
              <div className="flex items-center">
                <span className="text-2xl mr-3">{module.icon}</span>
                <h3 className="text-xl font-bold">{module.title}</h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <ul className="mb-4 space-y-2">
                {module.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-2 ${darkMode ? 'bg-indigo-400' : 'bg-indigo-600'}`}></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Progress */}
              <div className="mt-4">
                <div className="flex justify-between mb-1">
                  <span>Progress</span>
                  <span>{module.progress}%</span>
                </div>
                <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <div 
                    className="h-2 rounded-full bg-indigo-500" 
                    style={{ width: `${module.progress}%` }}
                  ></div>
                </div>
              </div>

              <button className={`mt-4 w-full py-2 rounded-lg font-medium ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'}`}>
                Start {module.title}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModulesSection;
