import React from 'react';

const PakistaniFilters = ({
  boards,
  selectedBoard,
  setSelectedBoard,
  subjectsByGrade,
  selectedGrade,
  setSelectedGrade,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      {/* Grade Selector */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Select Grade Level</h3>
        <div className="flex flex-wrap gap-2">
          {Object.keys(subjectsByGrade).map((grade) => (
            <button
              key={grade}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedGrade === grade
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedGrade(grade)}
            >
              {grade === '9-10' && 'Matric (9-10)'}
              {grade === '11-12' && 'Intermediate (11-12)'}
              {grade === 'O-Level' && 'Cambridge O-Level'}
              {grade === 'A-Level' && 'Cambridge A-Level'}
            </button>
          ))}
        </div>
      </div>

      {/* Board Selector */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Select Education Board</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {boards.map((board) => (
            <div
              key={board.id}
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                selectedBoard === board.id
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 bg-white hover:shadow-md'
              }`}
              onClick={() => setSelectedBoard(board.id)}
            >
              <h4 className="font-medium text-gray-800">{board.name}</h4>
              <p className="text-sm text-gray-600">{board.region}</p>
              {selectedBoard === board.id && (
                <div className="mt-2 text-green-600 text-sm font-medium">
                  Selected
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PakistaniFilters;
