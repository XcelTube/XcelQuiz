import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const ResourcesSection = ({ resourceCards }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resourceCards.map((card, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-white p-6 rounded-xl shadow-md flex flex-col border-t-4 border-indigo-500"
        >
          <div className={`${card.color} p-4 rounded-lg mb-4 flex justify-center`}>
            {card.icon}
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">{card.title}</h3>
          <p className="text-gray-600 mb-4 flex-grow">{card.description}</p>
          <button
            className={`${card.buttonColor} text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center`}
          >
            {card.action} <FiExternalLink className="ml-2" />
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default ResourcesSection;
