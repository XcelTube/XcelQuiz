import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const SubjectsSection = ({
  subjectsByGrade,
  selectedGrade,
  setSelectedGrade,
  expandedSubject,
  setExpandedSubject,
}) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const subjectItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold text-green-800 mb-6">
          Subjects by Grade & Board
        </h2>

        {/* Grade Level Selector */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Select Grade Level</h3>
          <div className="flex flex-wrap gap-2">
            {Object.keys(subjectsByGrade).map((grade) => (
              <button
                key={grade}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedGrade === grade
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedGrade(grade)}
              >
                {grade === '9-10' && 'Matric (9-10)'}
                {grade === '11-12' && 'Intermediate (11-12)'}
                {grade === 'O-Level' && 'Cambridge O-Level'}
                {grade === 'A-Level' && 'Cambridge A-Level'}
              </button>
            ))}
          </div>
        </div>

        {/* Subject Groups */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {Object.entries(subjectsByGrade[selectedGrade]).map(([group, subjects]) => (
            <motion.div
              key={group}
              variants={fadeIn}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              {/* Subject Group Header */}
              <button
                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
                onClick={() =>
                  setExpandedSubject(expandedSubject === group ? null : group)
                }
              >
                <h4 className="font-semibold text-gray-800">{group}</h4>
                {expandedSubject === group ? <FiChevronUp /> : <FiChevronDown />}
              </button>

              {/* Subject Items */}
              <AnimatePresence>
                {expandedSubject === group && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 overflow-hidden"
                  >
                    <div className="py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {subjects.map((subject) => (
                        <motion.div
                          key={subject}
                          variants={subjectItem}
                          className="px-3 py-2 bg-white border border-gray-200 rounded-md hover:border-green-300 hover:bg-green-50 transition-colors"
                        >
                          {subject}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SubjectsSection;
