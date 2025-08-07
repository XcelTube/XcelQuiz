import React from 'react';
import { BookOpen } from 'lucide-react';

const SubjectsSection = ({ currentSubjects = [] }) => {
  return (
    <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 mb-12">
      {/* Section Header */}
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Subject-wise Practice</h2>
          <p className="text-gray-600">Master each subject individually</p>
        </div>
      </div>

      {/* Fallback when no subjects */}
      {currentSubjects.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          No subjects available. Please try again later.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentSubjects.map((subject, index) => (
            <div
              key={subject?.name || index}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className={`w-full h-3 bg-gradient-to-r ${subject?.color || 'from-gray-300 to-gray-400'} rounded-full mb-6 shadow-sm`}
              ></div>
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                {subject?.icon || '📘'}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {subject?.name || 'Unknown'}
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-700">
                  {subject?.questions?.toLocaleString() || 0}
                </span>
                <span className="text-sm text-gray-500">Questions</span>
              </div>
              <button className="w-full mt-4 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-500 hover:to-purple-500 hover:text-white rounded-xl py-3 font-semibold transition-all duration-300 group-hover:shadow-lg">
                Practice Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubjectsSection;
