import React from 'react';
import { Trophy } from 'lucide-react';

const HeaderSection = () => {
  return (
    <div className="text-center mb-12 animate-fade-in">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 shadow-2xl animate-bounce">
        <Trophy className="w-10 h-10 text-white" />
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
        Entry Test Mastery Hub
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Your ultimate destination for Medical & Engineering entry test preparation. 
        Master the tests, achieve your dreams! 🚀
      </p>
    </div>
  );
};

export default HeaderSection;
