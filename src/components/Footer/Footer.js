import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">X</span>
            </div>
            <span className="text-xl font-bold text-gray-900">XcelQuiz</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-gray-600 text-sm">English</span>
          </div>
          <div className="text-center mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">© 2025 XcelQuiz</p>
          </div>
          <div className="flex space-x-4">
            {[1, 2, 3, 4].map((_, i) => (
              <button key={i} className="text-gray-400 hover:text-gray-600">
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
