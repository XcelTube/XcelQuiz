import React from 'react';

const AmericanTabsNav = ({ activeTab, setActiveTab }) => {
  const tabs = ['overview', 'subjects', 'exams', 'resources'];

  return (
    <div className="flex border-b border-gray-200 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-6 py-3 font-medium text-sm capitalize transition-all duration-200 ${
            activeTab === tab
              ? 'text-indigo-600 border-b-2 border-indigo-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default AmericanTabsNav;
