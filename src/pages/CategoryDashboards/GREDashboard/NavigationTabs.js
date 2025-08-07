// src/pages/CategoryDashboards/GREDashboard/NavigationTabs.js

import React from 'react';

const NavigationTabs = ({ activeTab, setActiveTab, darkMode }) => {
  const tabClasses = (tabName) => `
    px-4 py-2 font-medium
    ${activeTab === tabName
      ? darkMode
        ? 'text-indigo-400 border-b-2 border-indigo-400'
        : 'text-indigo-700 border-b-2 border-indigo-700'
      : 'text-gray-500 hover:text-indigo-600'}
  `;

  return (
    <div className="flex border-b mb-6">
      <button onClick={() => setActiveTab('overview')} className={tabClasses('overview')}>
        Overview
      </button>
      <button onClick={() => setActiveTab('study')} className={tabClasses('study')}>
        Study Plan
      </button>
      <button onClick={() => setActiveTab('practice')} className={tabClasses('practice')}>
        Practice Tests
      </button>
      <button onClick={() => setActiveTab('progress')} className={tabClasses('progress')}>
        Progress
      </button>
    </div>
  );
};

export default NavigationTabs;
