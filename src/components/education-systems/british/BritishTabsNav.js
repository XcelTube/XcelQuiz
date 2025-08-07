import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiBarChart2, 
  FiBook, 
  FiDownload, 
  FiCalendar 
} from 'react-icons/fi';

const BritishTabsNav = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FiBarChart2 className="mr-2" /> },
    { id: 'subjects', label: 'Subjects', icon: <FiBook className="mr-2" /> },
    { id: 'resources', label: 'Resources', icon: <FiDownload className="mr-2" /> },
    { id: 'exams', label: 'Exams', icon: <FiCalendar className="mr-2" /> }
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mb-10"
    >
      <ul className="flex flex-wrap justify-center -mb-px">
        {tabs.map((tab) => (
          <li key={tab.id} className="mx-1">
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center p-4 border-b-2 rounded-t-lg font-medium text-lg transition-colors ${
                activeTab === tab.id
                  ? 'text-indigo-600 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 border-transparent'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default BritishTabsNav;
