import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiAward } from 'react-icons/fi';

const ExamsSection = ({ exams }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-xl shadow-md p-6"
    >
      <h2 className="text-2xl font-bold text-orange-800 mb-6 flex items-center">
        <FiAward className="mr-2" />
        Important Indian Competitive Exams
      </h2>

      <div className="space-y-5">
        {exams.map((exam, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="border-l-4 border-orange-500 bg-orange-50 rounded-r-lg p-4 flex justify-between items-start"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{exam.name}</h3>
              <p className="text-gray-600 text-sm">{exam.description}</p>
              <p className="text-gray-500 text-xs mt-1">
                <span className="font-medium">Conducting Body:</span> {exam.body}
              </p>
            </div>
            {exam.link && (
              <a
                href={exam.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-orange-700 hover:text-orange-900 font-medium flex items-center"
              >
                Learn More <FiExternalLink className="ml-1" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ExamsSection;
