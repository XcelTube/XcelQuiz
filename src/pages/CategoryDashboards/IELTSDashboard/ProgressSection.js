import React from 'react';
import { motion } from 'framer-motion';
import coreModules from './data/coreModules';

const ProgressSection = ({ currentUser, currentTheme }) => {
  // Theme-aware colors
  const themeColors = {
    light: {
      cardBg: 'bg-white',
      cardText: 'text-gray-800',
      secondaryText: 'text-gray-600',
      progressBg: 'bg-gray-200',
      highlightBg: 'bg-blue-50',
      highlightBorder: 'border-blue-200',
      streakActive: 'bg-green-500',
      streakInactive: 'bg-gray-200',
      streakText: 'text-gray-600',
    },
    dark: {
      cardBg: 'bg-gray-800',
      cardText: 'text-white',
      secondaryText: 'text-gray-400',
      progressBg: 'bg-gray-700',
      highlightBg: 'bg-blue-900/20',
      highlightBorder: 'border-blue-700',
      streakActive: 'bg-green-600',
      streakInactive: 'bg-gray-700',
      streakText: 'text-gray-400',
    },
    emerald: {
      cardBg: 'bg-white',
      cardText: 'text-gray-800',
      secondaryText: 'text-gray-600',
      progressBg: 'bg-gray-200',
      highlightBg: 'bg-emerald-50',
      highlightBorder: 'border-emerald-200',
      streakActive: 'bg-emerald-500',
      streakInactive: 'bg-gray-200',
      streakText: 'text-gray-600',
    },
    rose: {
      cardBg: 'bg-white',
      cardText: 'text-gray-800',
      secondaryText: 'text-gray-600',
      progressBg: 'bg-gray-200',
      highlightBg: 'bg-rose-50',
      highlightBorder: 'border-rose-200',
      streakActive: 'bg-rose-500',
      streakInactive: 'bg-gray-200',
      streakText: 'text-gray-600',
    },
    ocean: {
      cardBg: 'bg-white',
      cardText: 'text-gray-800',
      secondaryText: 'text-gray-600',
      progressBg: 'bg-gray-200',
      highlightBg: 'bg-blue-50',
      highlightBorder: 'border-blue-200',
      streakActive: 'bg-blue-500',
      streakInactive: 'bg-gray-200',
      streakText: 'text-gray-600',
    },
  };

  const currentThemeColors = themeColors[currentTheme] || themeColors.light;

  const leaderboard = [
    { rank: 1, name: 'Alex Johnson', score: 8.5, streak: 15, avatar: 'https://randomuser.me/api/portraits/men/22.jpg' },
    { rank: 2, name: 'Sarah Kim', score: 8.0, streak: 12, avatar: 'https://randomuser.me/api/portraits/women/33.jpg' },
    { rank: 3, name: 'Michael Brown', score: 7.5, streak: 10, avatar: 'https://randomuser.me/api/portraits/men/45.jpg' },
    { rank: 4, name: 'You', score: currentUser.band, streak: currentUser.streak, avatar: currentUser.avatar }
  ];

  return (
    <div className="space-y-12">
      {/* Heading */}
      <div className="text-center">
        <h1 className={`text-3xl md:text-4xl font-bold ${currentThemeColors.cardText} mb-4`}>
          Your Progress
        </h1>
        <p className={`text-lg ${currentThemeColors.secondaryText}`}>
          Track your journey to IELTS success
        </p>
      </div>

      {/* Band Score Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={`${currentThemeColors.cardBg} rounded-2xl shadow-md p-6`}>
          <h2 className={`text-2xl font-bold ${currentThemeColors.cardText} mb-6`}>
            Band Score Progress
          </h2>
          <div className="space-y-6">
            {coreModules.map((module) => (
              <div key={module.id}>
                <div className="flex justify-between mb-1">
                  <span className={`${currentThemeColors.cardText} font-medium`}>
                    {module.title}
                  </span>
                  <span className={`font-bold ${module.textColor}`}>
                    {(module.progress / 100 * 9).toFixed(1)}
                  </span>
                </div>
                <div className={`w-full ${currentThemeColors.progressBg} rounded-full h-2`}>
                  <div
                    className={`bg-gradient-to-r ${module.color} h-2 rounded-full`}
                    style={{ width: `${module.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className={`${currentThemeColors.cardBg} rounded-2xl shadow-md p-6`}>
          <h2 className={`text-2xl font-bold ${currentThemeColors.cardText} mb-6`}>
            Leaderboard
          </h2>
          <div className="space-y-4">
            {leaderboard.map((user) => (
              <div
                key={user.rank}
                className={`flex items-center justify-between p-4 rounded-xl ${
                  user.name === 'You'
                    ? `${currentThemeColors.highlightBg} border-2 ${currentThemeColors.highlightBorder}`
                    : `${currentTheme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                      user.rank === 1
                        ? 'bg-yellow-500'
                        : user.rank === 2
                        ? 'bg-gray-400'
                        : user.rank === 3
                        ? 'bg-orange-500'
                        : 'bg-blue-500'
                    }`}
                  >
                    {user.rank}
                  </div>
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                  <span className={`font-medium ${currentThemeColors.cardText}`}>{user.name}</span>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${currentThemeColors.cardText}`}>{user.score}</p>
                  <p className={`text-xs ${currentThemeColors.secondaryText}`}>{user.streak} day streak</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Study Streak */}
        <div className={`${currentThemeColors.cardBg} rounded-2xl shadow-md p-6 lg:col-span-2`}>
          <h2 className={`text-2xl font-bold ${currentThemeColors.cardText} mb-6`}>
            Study Streak
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-4xl font-bold ${currentThemeColors.cardText}`}>{currentUser.streak} days</p>
              <p className={currentThemeColors.secondaryText}>Current streak</p>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <div
                  key={day}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg font-semibold ${
                    day <= currentUser.streak
                      ? `${currentThemeColors.streakActive} text-white`
                      : `${currentThemeColors.streakInactive} ${currentThemeColors.streakText}`
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressSection;