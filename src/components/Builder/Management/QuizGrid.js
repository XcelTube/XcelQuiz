import React from 'react';

const quizzes = [
  {
    id: 1,
    title: "Intro to AI Ethics",
    subject: "AI",
    difficulty: "Medium",
    questions: 10,
    createdAt: "2025-07-25"
  },
  {
    id: 2,
    title: "Basics of Thermodynamics",
    subject: "Physics",
    difficulty: "Hard",
    questions: 8,
    createdAt: "2025-07-20"
  }
];

const QuizGrid = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">All Quizzes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map(quiz => (
          <div key={quiz.id} className="p-4 border rounded-xl shadow-sm bg-white hover:shadow-md transition">
            <h3 className="text-lg font-bold">{quiz.title}</h3>
            <p className="text-sm text-gray-600">{quiz.subject} • {quiz.difficulty}</p>
            <p className="text-sm mt-1">{quiz.questions} Questions</p>
            <p className="text-xs text-gray-400 mt-2">Created on {quiz.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizGrid;
