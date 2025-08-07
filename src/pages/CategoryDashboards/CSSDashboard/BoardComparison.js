import React from 'react';
import { ChevronRight } from 'lucide-react';
import { getDifficultyColor } from './utils';

const BoardComparison = ({ quizBoards }) => {
  // Random helper to simulate success rate and difficulty (can be improved with real data)
  const getRandomSuccessRate = () => `${Math.floor(Math.random() * 20) + 70}%`;
  const getRandomDifficulty = () => {
    const levels = ['Easy', 'Medium', 'Hard'];
    return levels[Math.floor(Math.random() * levels.length)];
  };

  return (
    <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-8 mt-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Board Comparison</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Board</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Total Papers</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Success Rate</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Difficulty</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {quizBoards.map((board) => {
              const difficulty = getRandomDifficulty();
              return (
                <tr
                  key={board.id}
                  className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{board.icon}</span>
                      <div>
                        <div className="font-semibold text-gray-900">{board.name}</div>
                        <div className="text-sm text-gray-500">{board.fullName}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 font-semibold">{board.totalPapers}</td>
                  <td className="py-4 px-4">
                    <span className="text-green-600 font-semibold">{getRandomSuccessRate()}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                        difficulty
                      )}`}
                    >
                      {difficulty}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1">
                      <span>Practice</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BoardComparison;
