// src/pages/CategoryDashboards/GREDashboard/ProgressSection.js

import React from 'react';

const ProgressSection = ({ user, darkMode }) => {
  return (
    <div className={`mb-8 p-6 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="flex justify-between mb-2">
        <span>Study Progress</span>
        <span>{user.progress}%</span>
      </div>
      <div className={`w-full h-4 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
        <div 
          className="h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" 
          style={{ width: `${user.progress}%` }}
        ></div>
      </div>
      <p className="mt-2 italic text-sm">
        "Success is the sum of small efforts, repeated day in and day out." - Robert Collier
      </p>
    </div>
  );
};

export default ProgressSection;
