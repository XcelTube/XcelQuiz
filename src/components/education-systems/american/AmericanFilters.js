import React from 'react';

const AmericanFilters = ({
  educationBoards,
  gradeLevels,
  selectedBoard,
  setSelectedBoard,
  selectedGrade,
  setSelectedGrade,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Education Standard Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Education Standard
          </label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={selectedBoard}
            onChange={(e) => setSelectedBoard(e.target.value)}
          >
            {Object.entries(educationBoards).map(([id, name]) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </div>

        {/* Grade Level Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Grade Level
          </label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
          >
            {gradeLevels.map((grade) => (
              <option key={grade.id} value={grade.id}>
                {grade.name}
              </option>
            ))}
          </select>
        </div>

        {/* Apply Filters Button */}
        <div className="flex items-end">
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-300">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmericanFilters;
