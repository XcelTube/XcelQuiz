import React from 'react';
import { motion } from 'framer-motion';
import { FaSchool } from 'react-icons/fa';

const AmericanHeroHeader = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <div className="inline-block mb-6">
        <div className="bg-gradient-to-r from-red-600 to-blue-600 text-white p-4 rounded-2xl shadow-xl inline-flex items-center">
          <FaSchool className="text-3xl mr-3" />
          <h1 className="text-4xl font-bold">American Education Hub</h1>
        </div>
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-700 max-w-3xl mx-auto"
      >
        Your centralized platform for exploring the U.S. education system—grade-wise subjects, AP & SAT prep, study tools, and college pathways.
      </motion.p>
    </motion.header>
  );
};

export default AmericanHeroHeader;
