import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher } from 'react-icons/fa';

const BritishHeroHeader = () => {
  return (
    <header className="mb-12 text-center">
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="inline-block mb-6"
      >
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-2xl shadow-xl inline-flex items-center">
          <FaChalkboardTeacher className="text-3xl mr-3" />
          <h1 className="text-4xl font-bold">British Education Hub</h1>
        </div>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-700 max-w-3xl mx-auto"
      >
        Your comprehensive portal for UK education, covering all major exam boards, subjects, and qualification levels with curated resources and expert guidance.
      </motion.p>
    </header>
  );
};

export default BritishHeroHeader;
