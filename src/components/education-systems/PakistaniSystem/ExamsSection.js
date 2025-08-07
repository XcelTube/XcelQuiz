import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const ExamsSection = ({ filteredExams }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
          <FiAward className="mr-2" />
          Upcoming Exams & Admissions
        </h2>

        {/* Upcoming Exams List */}
        {filteredExams.length > 0 ? (
          <div className="space-y-4">
            {filteredExams.map((exam, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="border-l-4 border-green-500 p-4 bg-gray-50 rounded-r-lg flex justify-between items-start"
              >
                <div>
                  <h3 className="font-semibold text-gray-800">{exam.name}</h3>
                  <p className="text-gray-600 text-sm">{exam.description}</p>
                  <p className="text-gray-500 text-xs mt-1">
                    <span className="font-medium">Date:</span> {exam.date}
                  </p>
                </div>
                <a
                  href={exam.link}
                  className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Details <FiExternalLink className="ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No exams found matching your search.
          </div>
        )}

        {/* Exam Preparation Cards */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-3">Exam Preparation Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-800 mb-2">MDCAT Preparation</h4>
              <p className="text-sm text-gray-600 mb-3">Complete guide for medical entry test</p>
              <button className="text-green-600 text-sm font-medium hover:underline">
                View Syllabus &rarr;
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-800 mb-2">ECAT Preparation</h4>
              <p className="text-sm text-gray-600 mb-3">Resources for engineering entry test</p>
              <button className="text-green-600 text-sm font-medium hover:underline">
                View Syllabus &rarr;
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-800 mb-2">CSS Preparation</h4>
              <p className="text-sm text-gray-600 mb-3">Civil services exam resources</p>
              <button className="text-green-600 text-sm font-medium hover:underline">
                View Syllabus &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExamsSection;
