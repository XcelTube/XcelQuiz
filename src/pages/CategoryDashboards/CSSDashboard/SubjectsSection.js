import React from 'react';
import { Search } from 'lucide-react';
import { getDifficultyColor } from './utils';

const SubjectsSection = ({
  subjects,
  selectedSubject,
  setSelectedSubject,
  searchTerm,
  setSearchTerm
}) => {
  const filteredSubjects = subjects
    .filter((subject) => selectedSubject === 'all' || subject.id === selectedSubject)
    .filter((subject) =>
      subject.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="space-y-8">
      {/* Heading + Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Subject-wise Preparation</h2>
          <p className="text-gray-600">
            Master each subject with targeted practice and comprehensive coverage
          </p>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search subjects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Dropdown */}
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Subjects</option>
            {subjects.map((subject) => (
              <option key={subject.id} value={subject.id}>
                {subject.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Subject Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredSubjects.map((subject) => (
          <div
            key={subject.id}
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="text-center mb-4">
              <div
                className={`w-16 h-16 bg-gradient-to-r ${subject.color} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-6 transition-transform duration-300`}
              >
                <span className="text-2xl">{subject.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{subject.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{subject.description}</p>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Questions:</span>
                <span className="font-semibold">
                  {subject.totalQuestions.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Difficulty:</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                    subject.difficulty
                  )}`}
                >
                  {subject.difficulty}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <button
                className={`w-full bg-gradient-to-r ${subject.color} text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium`}
              >
                Start Practice
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectsSection;
