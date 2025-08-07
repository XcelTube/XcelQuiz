import React from 'react';
import { Calendar, Filter, Download } from 'lucide-react';
import { getDifficultyColor } from './utils';

const PastPapersSection = ({
  selectedYear,
  setSelectedYear,
  years,
  pastPapers
}) => {
  const filteredPapers = pastPapers.filter(
    (paper) => !selectedYear || paper.year.toString() === selectedYear
  );

  return (
    <div className="space-y-8">
      {/* Heading + Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Past Papers Collection</h2>
          <p className="text-gray-600">Complete collection of CSS past papers from 2005–2024</p>
        </div>

        <div className="flex items-center space-x-4">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Past Paper Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPapers.map((paper) => (
          <div
            key={paper.year}
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{paper.year}</h3>
                  <p className="text-sm text-gray-500">CSS Examination</p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                  paper.difficulty
                )}`}
              >
                {paper.difficulty}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Attempts:</span>
                <span className="font-semibold">{paper.attempts.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Avg Score:</span>
                <span className="font-semibold text-green-600">{paper.avgScore}%</span>
              </div>
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                Start Test
              </button>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastPapersSection;
