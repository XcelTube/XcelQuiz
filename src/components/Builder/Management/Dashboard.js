import React from 'react';
import ChartSubject from './ChartSubject';
import ChartDifficulty from './ChartDifficulty';

const Dashboard = () => {
  // TEMP MOCK DATA - replace with API later
  const totalQuizzes = 8;
  const publishedQuizzes = 5;
  const draftQuizzes = 3;
  const totalAttempts = 1567;
  const totalCoins = 120;

  const recentQuizzes = [
    {
      _id: '1',
      title: 'Introduction to AI Ethics',
      description: 'A foundational quiz on principles of Artificial Intelligence ethics.',
      questions: [{}, {}, {}, {}, {}, {}],
      settings: {
        timeLimit: 30,
        rewards: 5,
      },
      status: 'Draft',
      updatedAt: '2025-07-27T08:00:00Z',
    },
    {
      _id: '2',
      title: 'Thermodynamics Basics',
      description: 'Covers basic laws and applications of thermodynamics.',
      questions: [{}, {}, {}, {}],
      settings: {
        timeLimit: 20,
        rewards: 3,
      },
      status: 'Published',
      updatedAt: '2025-07-25T10:00:00Z',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Quiz Management Dashboard</h1>
        <p className="text-sm text-gray-500">Your quiz performance overview</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        <StatCard label="Total Quizzes" value={totalQuizzes} />
        <StatCard label="Published Quizzes" value={publishedQuizzes} />
        <StatCard label="Draft Quizzes" value={draftQuizzes} />
        <StatCard label="Total Attempts" value={totalAttempts.toLocaleString()} />
        <StatCard label="Coins Distributed" value={`${totalCoins}+`} />
      </div>

      {/* My Quizzes Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">My Quizzes</h2>
          <a
            href="/quizbuilder/create"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"
          >
            + Create New
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {recentQuizzes.map((quiz) => (
            <div
              key={quiz._id}
              className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-bold text-gray-800">{quiz.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{quiz.description}</p>

              <div className="flex flex-wrap text-sm text-gray-500 gap-4 mt-3">
                <span>📄 {quiz.questions?.length || 0} Questions</span>
                <span>⏱ {quiz.settings?.timeLimit || 0} Min</span>
                <span>🏅 {quiz.settings?.rewards || 0} XCEL</span>
              </div>

              <div className="flex items-center justify-between mt-4">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    quiz.status === 'Published'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {quiz.status}
                </span>
                <span className="text-xs text-gray-400">
                  Updated {new Date(quiz.updatedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-4 text-center text-gray-400 h-48 flex items-center justify-center">
          [📊 Subject Pie Chart Placeholder]
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center text-gray-400 h-48 flex items-center justify-center">
          [📈 Difficulty Bar Chart Placeholder]
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value }) => (
  <div className="bg-white p-4 rounded-lg border shadow-sm">
    <div className="text-sm text-gray-500">{label}</div>
    <div className="text-2xl font-bold text-gray-800">{value}</div>
  </div>
);

export default Dashboard;
