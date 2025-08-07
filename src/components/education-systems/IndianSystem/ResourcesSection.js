import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const ResourcesSection = ({ selectedBoard, selectedClass, selectedSubject }) => {
  return (
    <motion.div
      key="resources"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-md p-6"
    >
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">
        Learning Resources for {selectedBoard} - Class {selectedClass} - {selectedSubject}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Syllabus */}
        <div className="bg-indigo-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-indigo-800">📖 Syllabus</h3>
          <p className="text-gray-700 mb-4">
            The complete syllabus for {selectedSubject} as prescribed by {selectedBoard} for Class {selectedClass}.
          </p>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Download Syllabus PDF <FiExternalLink className="ml-2" />
          </button>
        </div>

        {/* Sample Papers */}
        <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-blue-800">📝 Sample Papers</h3>
          <p className="text-gray-700 mb-4">
            Practice with previous year question papers and sample papers.
          </p>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Download Papers <FiExternalLink className="ml-2" />
          </button>
        </div>

        {/* NCERT Solutions */}
        <div className="bg-green-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-green-800">📚 NCERT Solutions</h3>
          <p className="text-gray-700 mb-4">
            Step-by-step solutions for all NCERT textbook questions.
          </p>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            View Solutions <FiExternalLink className="ml-2" />
          </button>
        </div>

        {/* Revision Notes */}
        <div className="bg-purple-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-purple-800">🧠 Revision Notes</h3>
          <p className="text-gray-700 mb-4">
            Concise notes covering all important concepts and formulas.
          </p>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            Download Notes <FiExternalLink className="ml-2" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ResourcesSection;
