import React from 'react';

const IndianFilters = ({
  boards,
  classes,
  selectedBoard,
  setSelectedBoard,
  selectedClass,
  setSelectedClass,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Education Board Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Education Board
          </label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={selectedBoard}
            onChange={(e) => setSelectedBoard(e.target.value)}
          >
            {boards.map((board) => (
              <option key={board.id} value={board.id}>
                {board.name}
              </option>
            ))}
          </select>
        </div>

        {/* Class Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Class Level
          </label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            {classes.map((grade) => (
              <option key={grade} value={grade}>
                Class {grade}
              </option>
            ))}
          </select>
        </div>

        {/* Search Bar */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Search Video Lectures
          </label>
          <input
            type="text"
            placeholder="Search by subject or title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>
    </div>
  );
};

export default IndianFilters;
