import React from 'react';
import { motion } from 'framer-motion';

const IndianHeroHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-10"
    >
      <h1 className="text-4xl font-bold text-indigo-900 mb-2 flex items-center justify-center">
        <span className="mr-3">🇮🇳</span> Indian Education Explorer
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Discover resources, syllabi, and preparation materials for all major Indian education boards and competitive exams.
      </p>
    </motion.div>
  );
};

export default IndianHeroHeader;
