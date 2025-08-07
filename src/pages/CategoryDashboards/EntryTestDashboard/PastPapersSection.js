import React from 'react';
import { ChevronRight, FileText } from 'lucide-react';

const PastPapersSection = ({
  currentUniversities = [], // Fallback to empty array
  hoveredCard,
  setHoveredCard,
}) => {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Past Papers</h2>
            <p className="text-gray-600">Top Universities Collection</p>
          </div>
        </div>

        {currentUniversities.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            No university data available.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentUniversities.map((uni, index) => (
              <div
                key={uni?.code || index}
                className="group bg-gradient-to-r from-white to-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard?.(`uni-${index}`)}
                onMouseLeave={() => setHoveredCard?.(null)}
              >
                <div
                  className={`w-full h-2 bg-gradient-to-r ${uni?.color || 'from-gray-300 to-gray-400'} rounded-full mb-4 transform transition-all duration-300 ${
                    hoveredCard === `uni-${index}` ? 'scale-105 shadow-lg' : ''
                  }`}
                ></div>
                <h3 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {uni?.name || 'Unknown University'}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">
                    {uni?.code || 'N/A'}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      uni?.difficulty === 'Very High'
                        ? 'bg-red-100 text-red-800'
                        : uni?.difficulty === 'High'
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {uni?.difficulty || 'Medium'}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all ml-auto mt-2" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PastPapersSection;
