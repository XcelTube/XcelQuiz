import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Target, BookOpen, Timer } from 'lucide-react';

const TestsSection = ({ currentUser, testStarted, testTime, startTest, endTest, currentTheme }) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Theme-aware colors
  const themeColors = {
    light: {
      cardBg: 'bg-white',
      cardText: 'text-gray-800',
      secondaryText: 'text-gray-600',
      border: 'border-gray-200',
      progressBg: 'bg-gray-200',
      buttonBg: 'from-blue-600 to-purple-600',
      difficultyBg: 'bg-blue-100',
      difficultyText: 'text-blue-600',
      challengeBg: 'bg-orange-500',
      challengeHover: 'hover:bg-orange-600',
    },
    dark: {
      cardBg: 'bg-gray-800',
      cardText: 'text-white',
      secondaryText: 'text-gray-400',
      border: 'border-gray-700',
      progressBg: 'bg-gray-700',
      buttonBg: 'from-blue-500 to-purple-500',
      difficultyBg: 'bg-blue-900',
      difficultyText: 'text-blue-400',
      challengeBg: 'bg-orange-600',
      challengeHover: 'hover:bg-orange-700',
    },
    emerald: {
      cardBg: 'bg-white',
      cardText: 'text-gray-800',
      secondaryText: 'text-gray-600',
      border: 'border-gray-200',
      progressBg: 'bg-gray-200',
      buttonBg: 'from-emerald-600 to-teal-600',
      difficultyBg: 'bg-emerald-100',
      difficultyText: 'text-emerald-600',
      challengeBg: 'bg-orange-500',
      challengeHover: 'hover:bg-orange-600',
    },
    rose: {
      cardBg: 'bg-white',
      cardText: 'text-gray-800',
      secondaryText: 'text-gray-600',
      border: 'border-gray-200',
      progressBg: 'bg-gray-200',
      buttonBg: 'from-rose-600 to-pink-600',
      difficultyBg: 'bg-rose-100',
      difficultyText: 'text-rose-600',
      challengeBg: 'bg-orange-500',
      challengeHover: 'hover:bg-orange-600',
    },
    ocean: {
      cardBg: 'bg-white',
      cardText: 'text-gray-800',
      secondaryText: 'text-gray-600',
      border: 'border-gray-200',
      progressBg: 'bg-gray-200',
      buttonBg: 'from-blue-600 to-indigo-600',
      difficultyBg: 'bg-blue-100',
      difficultyText: 'text-blue-600',
      challengeBg: 'bg-orange-500',
      challengeHover: 'hover:bg-orange-600',
    },
  };

  const currentThemeColors = themeColors[currentTheme] || themeColors.light;

  const tests = [
    { title: 'Full Mock Test', duration: '2h 45m', questions: 40, type: 'Complete IELTS Exam', difficulty: 'All Levels' },
    { title: 'Listening Practice', duration: '30m', questions: 40, type: 'Listening Only', difficulty: 'Intermediate' },
    { title: 'Reading Challenge', duration: '60m', questions: 40, type: 'Academic Reading', difficulty: 'Advanced' },
    { title: 'Writing Workshop', duration: '60m', questions: 2, type: 'Task 1 & 2', difficulty: 'All Levels' },
  ];

  const history = [
    { date: 'Jul 28', test: 'Listening', score: 7.5 },
    { date: 'Jul 25', test: 'Reading', score: 6.5 },
    { date: 'Jul 20', test: 'Full Test', score: 6.5 },
  ];

  return (
    <div className="space-y-12">
      {/* Heading */}
      <div className="text-center">
        <h1 className={`text-3xl md:text-4xl font-bold ${currentThemeColors.cardText} mb-3`}>
          Mock Tests & Practice
        </h1>
        <p className={`text-lg ${currentThemeColors.secondaryText}`}>
          Real exam experience with detailed feedback
        </p>
      </div>

      {/* Test Cards + Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Test List */}
        <div className="lg:col-span-2 space-y-6">
          {tests.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${currentThemeColors.cardBg} rounded-2xl shadow-md p-6 hover:shadow-lg transition`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg md:text-xl font-bold ${currentThemeColors.cardText}`}>
                  {test.title}
                </h3>
                <span className={`text-xs font-medium px-3 py-1 ${currentThemeColors.difficultyBg} ${currentThemeColors.difficultyText} rounded-full`}>
                  {test.difficulty}
                </span>
              </div>

              <div className={`grid grid-cols-3 text-sm ${currentThemeColors.secondaryText} mb-4`}>
                <div className="text-center">
                  <Clock className="w-4 h-4 mx-auto mb-1" />
                  {test.duration}
                </div>
                <div className="text-center">
                  <Target className="w-4 h-4 mx-auto mb-1" />
                  {test.questions} Questions
                </div>
                <div className="text-center">
                  <BookOpen className="w-4 h-4 mx-auto mb-1" />
                  {test.type}
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                className={`w-full bg-gradient-to-r ${currentThemeColors.buttonBg} text-white py-2 rounded-xl font-semibold hover:shadow-md transition`}
                onClick={index === 0 ? (testStarted ? endTest : startTest) : null}
              >
                {index === 0 && testStarted ? (
                  <div className="flex items-center justify-center">
                    <Timer className="w-4 h-4 mr-2" />
                    {formatTime(testTime)}
                  </div>
                ) : (
                  'Start Test'
                )}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Performance */}
          <div className={`${currentThemeColors.cardBg} rounded-2xl shadow-md p-6`}>
            <h3 className={`text-xl font-bold ${currentThemeColors.cardText} mb-4`}>
              Your Performance
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className={currentThemeColors.secondaryText}>Current Band</span>
                <span className="font-bold text-blue-600 dark:text-blue-400 text-lg">
                  {currentUser.band}
                </span>
              </div>
              <div className="flex justify-between">
                <span className={currentThemeColors.secondaryText}>Target Band</span>
                <span className="font-bold text-green-600 dark:text-green-400 text-lg">
                  {currentUser.target}
                </span>
              </div>
              <div className={`w-full ${currentThemeColors.progressBg} rounded-full h-2`}>
                <div
                  className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full"
                  style={{ width: `${(currentUser.band / currentUser.target) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Daily Challenge */}
          <div className={`${currentThemeColors.cardBg} rounded-2xl shadow-md p-6 text-center`}>
            <Timer className="w-8 h-8 text-orange-500 mx-auto mb-3" />
            <p className={currentThemeColors.secondaryText + " mb-3"}>
              Complete today's vocabulary challenge
            </p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`w-full ${currentThemeColors.challengeBg} text-white py-2 rounded-xl font-semibold ${currentThemeColors.challengeHover} transition`}
            >
              Take Challenge
            </motion.button>
          </div>

          {/* Test History */}
          <div className={`${currentThemeColors.cardBg} rounded-2xl shadow-md p-6`}>
            <h3 className={`text-xl font-bold ${currentThemeColors.cardText} mb-4`}>
              Test History
            </h3>
            <div className="space-y-3">
              {history.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center border-b ${currentThemeColors.border} pb-2`}
                >
                  <div>
                    <p className={`${currentThemeColors.secondaryText} text-sm`}>{item.date}</p>
                    <p className={`${currentThemeColors.cardText} font-medium`}>{item.test}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${currentThemeColors.cardText}`}>{item.score}</p>
                    <p className={`text-xs ${currentThemeColors.secondaryText}`}>Band Score</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestsSection;