import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';

const SubjectFilterBar = ({
  searchTerm,
  setSearchTerm,
  selectedBoard,
  setSelectedBoard,
  selectedLevel,
  setSelectedLevel,
  allLevels,
  educationBoards
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mb-10 bg-white p-6 rounded-xl shadow-md"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search subjects..."
            className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Board Filter */}
        <select
          className="bg-white border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
          value={selectedBoard}
          onChange={(e) => setSelectedBoard(e.target.value)}
        >
          <option value="all">All Exam Boards</option>
          {educationBoards.map((board) => (
            <option key={board.id} value={board.id}>{board.name}</option>
          ))}
        </select>

        {/* Level Filter */}
        <select
          className="bg-white border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
        >
          <option value="all">All Levels</option>
          {allLevels.map((level) => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>
      </div>
    </motion.div>
  );
};

export default SubjectFilterBar;
