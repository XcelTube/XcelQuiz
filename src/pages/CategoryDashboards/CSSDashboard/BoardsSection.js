import React from 'react';
import { PlayCircle, FileText } from 'lucide-react';

const BoardsSection = ({ quizBoards }) => {
  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Examination Boards</h2>
        <p className="text-gray-600">
          Practice with papers from different examination boards across Pakistan
        </p>
      </div>

      {/* Board Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizBoards.map((board) => (
          <div
            key={board.id}
            className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group"
          >
            <div className="text-center mb-6">
              <div
                className={`w-20 h-20 bg-gradient-to-r ${board.color} rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500 shadow-lg`}
              >
                <span className="text-3xl">{board.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{board.name}</h3>
              <p className="text-sm font-medium text-gray-500 mb-3">{board.fullName}</p>
              <p className="text-gray-600">{board.description}</p>
            </div>

            <div className="bg-gray-50/50 rounded-2xl p-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Available Papers:</span>
                <span className="text-2xl font-bold text-gray-900">
                  {board.totalPapers}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                className={`w-full bg-gradient-to-r ${board.color} text-white py-3 px-6 rounded-xl hover:shadow-xl transition-all duration-300 font-medium flex items-center justify-center space-x-2 group`}
              >
                <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Start Practice</span>
              </button>
              <button className="w-full border-2 border-gray-200 text-gray-700 py-3 px-6 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 font-medium flex items-center justify-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>View All Papers</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardsSection;
