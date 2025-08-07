import React from 'react';

const FieldSelector = ({ selectedField, setSelectedField }) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-2 shadow-xl border border-white/20">
        <button
          onClick={() => setSelectedField('medical')}
          className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
            selectedField === 'medical'
              ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg transform scale-105'
              : 'text-gray-600 hover:text-red-500 hover:bg-red-50'
          }`}
        >
          🏥 Medical
        </button>
        <button
          onClick={() => setSelectedField('engineering')}
          className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
            selectedField === 'engineering'
              ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg transform scale-105'
              : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
          }`}
        >
          ⚙️ Engineering
        </button>
      </div>
    </div>
  );
};

export default FieldSelector;
