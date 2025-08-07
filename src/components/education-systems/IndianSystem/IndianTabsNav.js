import React from 'react';
import { motion } from 'framer-motion';
import { FiBarChart2, FiBookOpen, FiBook, FiAward, FiVideo } from 'react-icons/fi';

const IndianTabsNav = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FiBarChart2 className="mr-2" /> },
    { id: 'resources', label: 'Learning Resources', icon: <FiBookOpen className="mr-2" /> },
    { id: 'books', label: 'Recommended Books', icon: <FiBook className="mr-2" /> },
    { id: 'exams', label: 'Competitive Exams', icon: <FiAward className="mr-2" /> },
    { id: 'videos', label: 'Video Lectures', icon: <FiVideo className="mr-2" /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="flex border-b border-gray-200 mb-8 overflow-x-auto"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-2 font-medium text-sm flex items-center whitespace-nowrap ${
            activeTab === tab.id
              ? 'text-indigo-600 border-b-2 border-indigo-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </motion.div>
  );
};

export default IndianTabsNav;
