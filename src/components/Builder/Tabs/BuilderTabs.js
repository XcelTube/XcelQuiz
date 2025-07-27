import React from 'react';

const BuilderTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['details', 'questions', 'settings', 'rewards'];

  return (
    <div className="border-b border-gray-200 bg-white px-6">
      <nav className="flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-4 px-2 border-b-2 font-medium text-sm capitalize transition-colors ${
              activeTab === tab
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab === 'rewards' ? 'Rewards & Publish' : tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default BuilderTabs;
