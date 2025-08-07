// src/pages/CategoryDashboards/GREDashboard/HeaderSection.js

import React from 'react';

const HeaderSection = ({ user, darkMode, setDarkMode }) => {
  return (
    <header className={`p-6 ${darkMode ? 'bg-gray-800' : 'bg-indigo-700 text-white'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">🎓 GRE Dashboard</h1>
          <p className="mt-2">Welcome back, {user.name}! Ready for today's study session?</p>
        </div>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-white text-indigo-700'}`}
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </header>
  );
};

export default HeaderSection;
