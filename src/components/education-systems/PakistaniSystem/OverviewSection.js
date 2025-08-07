import React from 'react';
import { motion } from 'framer-motion';

const OverviewSection = ({ boards, selectedBoard, setSelectedBoard }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Pakistan Education System Overview</h2>
        <p className="text-gray-700 mb-6">
          The Pakistani education system offers multiple pathways for students with different boards and curricula. 
          The system is divided into primary (grades 1–8), secondary (grades 9–10), and higher secondary (grades 11–12), 
          followed by tertiary education at universities and colleges.
        </p>

        {/* Streams Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="font-semibold text-blue-800 mb-2">Main Stream</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">1</span>
                <span>Matriculation (Science/Arts) - Grades 9–10</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">2</span>
                <span>Intermediate (FSc/ICS/ICom/FA) - Grades 11–12</span>
              </li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
            <h3 className="font-semibold text-purple-800 mb-2">Alternative Stream</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">1</span>
                <span>Cambridge O Levels - Equivalent to Matric</span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">2</span>
                <span>Cambridge A Levels - Equivalent to Intermediate</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Board Selection Grid */}
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Educational Boards in Pakistan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {boards.map((board) => (
            <motion.div
              key={board.id}
              whileHover={{ y: -5 }}
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                selectedBoard === board.id
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 bg-white hover:shadow-md'
              }`}
              onClick={() => setSelectedBoard(board.id)}
            >
              <h4 className="font-medium text-gray-800">{board.name}</h4>
              <p className="text-sm text-gray-600">{board.region}</p>
              {selectedBoard === board.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-2 text-green-600 text-sm font-medium"
                >
                  Selected
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default OverviewSection;
