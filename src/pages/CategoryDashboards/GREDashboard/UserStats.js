// src/pages/CategoryDashboards/GREDashboard/UserStats.js

import React from 'react';
import { FiAward, FiBarChart2, FiClock, FiCalendar } from 'react-icons/fi';

const UserStats = ({ user, darkMode }) => {
  const cardStyle = `p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-indigo-50'}`;

  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow`}>
      <div className={cardStyle}>
        <h3 className="flex items-center font-semibold"><FiAward className="mr-2" /> Target Score</h3>
        <p className="text-2xl font-bold">{user.targetScore}</p>
      </div>
      <div className={cardStyle}>
        <h3 className="flex items-center font-semibold"><FiBarChart2 className="mr-2" /> Current Score</h3>
        <p className="text-2xl font-bold">V: {user.currentScores.verbal} | Q: {user.currentScores.quant}</p>
      </div>
      <div className={cardStyle}>
        <h3 className="flex items-center font-semibold"><FiClock className="mr-2" /> Study Streak</h3>
        <p className="text-2xl font-bold">{user.streak} days 🔥</p>
      </div>
      <div className={cardStyle}>
        <h3 className="flex items-center font-semibold"><FiCalendar className="mr-2" /> Total Hours</h3>
        <p className="text-2xl font-bold">{user.hoursStudied}</p>
      </div>
    </div>
  );
};

export default UserStats;
