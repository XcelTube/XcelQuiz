import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';

const PakistaniHeroHeader = ({ searchQuery, setSearchQuery }) => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white shadow-md"
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-bold text-green-800 flex items-center">
              <span className="mr-2">🇵🇰</span>
              <span>Pakistani Education Hub</span>
            </h1>
            <p className="text-gray-600">Comprehensive resources for students across Pakistan</p>
          </div>
          <div className="relative w-full md:w-64">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default PakistaniHeroHeader;
