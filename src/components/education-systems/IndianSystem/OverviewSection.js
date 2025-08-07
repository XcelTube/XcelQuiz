import React from 'react';
import { motion } from 'framer-motion';

const OverviewSection = ({ boards }) => {
  return (
    <motion.div
      key="overview"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-md p-6"
    >
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">
        Indian Education System Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Structure Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">📚 Structure</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Primary:</strong> Classes 1–5 (Ages 6–10)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Upper Primary:</strong> Classes 6–8 (Ages 11–13)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Secondary:</strong> Classes 9–10 (Ages 14–15)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Higher Secondary:</strong> Classes 11–12 (Ages 16–17)</span>
            </li>
          </ul>
        </div>

        {/* Board Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">🏫 Education Boards</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 mb-3">
              India has multiple education boards with different curricula:
            </p>
            <ul className="space-y-2">
              {boards.map((board) => (
                <li key={board.id} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>{board.id}:</strong> {board.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OverviewSection;
