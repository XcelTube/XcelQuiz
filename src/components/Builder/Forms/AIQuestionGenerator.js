import React from 'react';
import { Lightbulb, Zap } from 'lucide-react';

const AIQuestionGenerator = ({
  quizTopic,
  setQuizTopic,
  difficulty,
  setDifficulty,
  numQuestions,
  setNumQuestions,
  onGenerate
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
      <div className="flex items-center space-x-2 mb-4">
        <Lightbulb className="w-5 h-5 text-blue-600" />
        <h4 className="text-md font-medium text-gray-900">AI Question Generator</h4>
      </div>
      <p className="text-gray-600 mb-6">
        Let AI help you generate questions based on your topic and preferences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Quiz Topic</label>
          <input
            type="text"
            value={quizTopic}
            onChange={(e) => setQuizTopic(e.target.value)}
            placeholder="e.g., Quantum Physics"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Number of Questions</label>
          <input
            type="number"
            min="1"
            max="50"
            value={numQuestions}
            onChange={(e) => setNumQuestions(parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <button
        onClick={onGenerate}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors"
      >
        <Zap className="w-4 h-4" />
        <span>Generate Questions</span>
      </button>
    </div>
  );
};

export default AIQuestionGenerator;
