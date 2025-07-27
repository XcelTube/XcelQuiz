import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import ChartSubject from './ChartSubject';
import ChartDifficulty from './ChartDifficulty';


const fetchStats = async () => {
  const { data } = await axios.get('/api/stats/dashboard', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`, // replace if using context
    },
  });
  return data;
};

const Dashboard = () => {
  const { data, isLoading, error } = useQuery('dashboardStats', fetchStats);

  if (isLoading) return <p>Loading dashboard...</p>;
  if (error) return <p>Failed to load dashboard.</p>;

  const {
    totalQuizzes,
    publishedQuizzes,
    draftQuizzes,
    totalAttempts,
    totalCoins,
    recentQuizzes,
  } = data;

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Quiz Management Dashboard</h1>
        <p className="text-sm text-gray-500">Your quiz performance overview</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatCard label="Total Quizzes" value={totalQuizzes} />
        <StatCard label="Published Quizzes" value={publishedQuizzes} />
        <StatCard label="Draft Quizzes" value={draftQuizzes} />
        <StatCard label="Total Attempts" value={totalAttempts.toLocaleString()} />
        <StatCard label="Coins Distributed" value={`${totalCoins}+`} />
      </div>

      {/* Recent Quizzes */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Recent Activity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentQuizzes.map((quiz) => (
            <div key={quiz._id} className="bg-white border rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold">{quiz.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  quiz.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {quiz.status}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Last updated: {new Date(quiz.updatedAt).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500">Attempts: {quiz.totalAttempts}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
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




