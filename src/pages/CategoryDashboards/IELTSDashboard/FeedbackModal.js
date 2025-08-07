import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const FeedbackModal = ({ setShowFeedbackModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={() => setShowFeedbackModal(false)}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
            Test Completed!
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            You scored <span className="font-bold text-blue-600 dark:text-blue-400">7.0</span> on this mock test.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
              <p className="text-sm text-gray-600 dark:text-gray-400">Listening</p>
              <p className="font-bold text-blue-600 dark:text-blue-400">7.5</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
              <p className="text-sm text-gray-600 dark:text-gray-400">Reading</p>
              <p className="font-bold text-green-600 dark:text-green-400">7.0</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
              <p className="text-sm text-gray-600 dark:text-gray-400">Writing</p>
              <p className="font-bold text-purple-600 dark:text-purple-400">6.5</p>
            </div>
          </div>

          <div className="flex space-x-3">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View Details
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setShowFeedbackModal(false)}
            >
              Close
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FeedbackModal;


