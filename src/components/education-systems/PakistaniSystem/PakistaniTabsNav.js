import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiVideo, FiAward } from 'react-icons/fi';

const tabs = ['overview', 'subjects', 'resources', 'exams'];

const PakistaniTabsNav = ({ activeTab, setActiveTab }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex overflow-x-auto mb-8 bg-white rounded-lg shadow-sm"
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-6 py-3 font-medium text-sm capitalize flex items-center ${
            activeTab === tab
              ? 'text-green-600 border-b-2 border-green-600'
              : 'text-gray-600 hover:text-green-500'
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab === 'overview' && <FiBook className="mr-2" />}
          {tab === 'subjects' && <FiBook className="mr-2" />}
          {tab === 'resources' && <FiVideo className="mr-2" />}
          {tab === 'exams' && <FiAward className="mr-2" />}
          {tab}
        </button>
      ))}
    </motion.div>
  );
};

export default PakistaniTabsNav;
