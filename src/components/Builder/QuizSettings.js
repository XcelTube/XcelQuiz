import React, { useState } from 'react';

const QuizSettings = () => {
  const [title, setTitle] = useState('Introduction to Machine Learning');
  const [timeLimit, setTimeLimit] = useState('30 minutes');
  const [difficulty, setDifficulty] = useState('Intermediate');
  const [attempts, setAttempts] = useState(3);

  return (
    <div className="quiz-header mb-6 flex flex-wrap gap-6 justify-between items-start">
      <div className="quiz-info flex-1 min-w-[250px]">
        <input
          type="text"
          className="quiz-title w-full p-3 rounded-xl border-2 border-gray-200 bg-slate-50 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter quiz title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="quiz-settings mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {/* Time Limit */}
          <div className="setting-card bg-gradient-to-br from-slate-100 to-slate-200 p-4 rounded-xl border">
            <div className="setting-label font-semibold text-gray-700 mb-2">⏰ Time Limit</div>
            <select
              className="setting-input w-full p-2 rounded border"
              value={timeLimit}
              onChange={(e) => setTimeLimit(e.target.value)}
            >
              <option>No limit</option>
              <option>30 minutes</option>
              <option>45 minutes</option>
              <option>1 hour</option>
              <option>Custom</option>
            </select>
          </div>

          {/* Difficulty */}
          <div className="setting-card bg-gradient-to-br from-slate-100 to-slate-200 p-4 rounded-xl border">
            <div className="setting-label font-semibold text-gray-700 mb-2">🎯 Difficulty</div>
            <select
              className="setting-input w-full p-2 rounded border"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>Expert</option>
            </select>
          </div>

          {/* Max Attempts */}
          <div className="setting-card bg-gradient-to-br from-slate-100 to-slate-200 p-4 rounded-xl border">
            <div className="setting-label font-semibold text-gray-700 mb-2">👥 Max Attempts</div>
            <input
              type="number"
              className="setting-input w-full p-2 rounded border"
              value={attempts}
              onChange={(e) => setAttempts(e.target.value)}
              min="1"
              max="10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizSettings;


