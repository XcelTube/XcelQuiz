import React from 'react';
import { Smile, Target, Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 py-10 text-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-inner border-t border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="flex justify-center items-center flex-wrap gap-3 mb-5 px-4">
        <Target className="w-6 h-6 text-blue-500" />
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Your success is our mission —
          <span className="ml-1 text-blue-600 dark:text-blue-400">Keep practicing</span>, 
          <span className="ml-1 text-purple-600 dark:text-purple-400"> keep achieving!</span>
        </p>
        <Rocket className="w-6 h-6 text-purple-500" />
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        🚀 Powered by <span className="font-medium text-blue-600 dark:text-blue-400">XcelQuiz</span> • 
        <span className="ml-1 italic">Learn Smart. Practice Daily. Win Big.</span>
      </p>
    </footer>
  );
};

export default Footer;
