import React from 'react';
import { motion } from 'framer-motion';
import {
  Users, TrendingUp, Target, Award, ArrowRight, Play, Brain,
  Clock, FileText, Download, Zap, CheckCircle
} from 'lucide-react';
import coreModules from './data/coreModules';
import studyTools from './data/studyTools';

const HomeSection = ({ currentUser, testStarted, testTime, startTest, endTest, currentTheme }) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Theme-aware colors
  const themeColors = {
    light: {
      heroBg: 'bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-800',
      cardBg: 'bg-white',
      cardText: 'text-gray-800',
      secondaryText: 'text-gray-600',
      progressBg: 'bg-gray-200',
      toolIconBg: 'bg-gray-100',
    },
    dark: {
      heroBg: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700',
      cardBg: 'bg-gray-800',
      cardText: 'text-white',
      secondaryText: 'text-gray-300',
      progressBg: 'bg-gray-700',
      toolIconBg: 'bg-gray-700',
    },
    emerald: {
      heroBg: 'bg-gradient-to-br from-emerald-800 via-teal-700 to-cyan-800',
      cardBg: 'bg-white',
      cardText: 'text-gray-800',
      secondaryText: 'text-gray-600',
      progressBg: 'bg-gray-200',
      toolIconBg: 'bg-emerald-100',
    },
    rose: {
      heroBg: 'bg-gradient-to-br from-rose-800 via-pink-700 to-fuchsia-800',
      cardBg: 'bg-white',
      cardText: 'text-gray-800',
      secondaryText: 'text-gray-600',
      progressBg: 'bg-gray-200',
      toolIconBg: 'bg-rose-100',
    },
    ocean: {
      heroBg: 'bg-gradient-to-br from-blue-800 via-indigo-700 to-violet-800',
      cardBg: 'bg-white',
      cardText: 'text-gray-800',
      secondaryText: 'text-gray-600',
      progressBg: 'bg-gray-200',
      toolIconBg: 'bg-blue-100',
    },
  };

  const currentThemeColors = themeColors[currentTheme] || themeColors.light;

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`relative overflow-hidden ${currentThemeColors.heroBg} rounded-3xl p-8 md:p-12 text-white`}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff fill-opacity=0.1%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative z-10 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
          >
            Master IELTS with Confidence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-blue-100"
          >
            Your complete preparation platform for achieving your target band score
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-2xl font-semibold shadow-xl hover:scale-105 transition">
              Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button className="border-2 border-white/30 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-white/10 transition">
              <Play className="w-4 h-4 mr-2" /> Watch Demo
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: 'Students', value: '50K+', icon: Users },
          { label: 'Success Rate', value: '94%', icon: TrendingUp },
          { label: 'Practice Tests', value: '200+', icon: Target },
          { label: 'Expert Tutors', value: '100+', icon: Award },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            whileHover={{ y: -5 }}
            className={`${currentThemeColors.cardBg} rounded-2xl p-6 shadow-lg hover:shadow-xl transition`}
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="w-8 h-8 text-blue-600" />
              <div className={`text-3xl font-bold ${currentThemeColors.cardText}`}>{stat.value}</div>
            </div>
            <p className={`${currentThemeColors.secondaryText} font-medium`}>{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Core Modules */}
      <div>
        <h2 className={`text-3xl font-bold text-center ${currentThemeColors.cardText} mb-10`}>
          Master All Four Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreModules.map((module, index) => (
            <motion.div
              key={module.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className={`${currentThemeColors.cardBg} rounded-3xl shadow-xl p-6`}
            >
              <div className={`w-full h-2 rounded bg-gradient-to-r ${module.color} mb-4`}></div>
              <div className={`flex items-center gap-3 ${module.textColor}`}>
                <module.icon className="w-6 h-6" />
                <h3 className="text-xl font-semibold">{module.title}</h3>
              </div>
              <p className={`text-sm ${currentThemeColors.secondaryText} mt-2 mb-4`}>
                {module.description}
              </p>

              <div className={`text-sm ${currentThemeColors.secondaryText} mb-2`}>
                Progress: {module.progress}%
              </div>
              <div className={`w-full ${currentThemeColors.progressBg} rounded-full h-2 mb-4`}>
                <div
                  className={`bg-gradient-to-r ${module.color} h-2 rounded-full`}
                  style={{ width: `${module.progress}%` }}
                ></div>
              </div>

              <ul className="text-sm space-y-1 mb-4">
                {module.features.slice(0, 3).map((f, i) => (
                  <li key={i} className={`flex items-center ${currentThemeColors.secondaryText}`}>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {f}
                  </li>
                ))}
              </ul>

              <button className="w-full py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:opacity-90 transition">
                Start Learning
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Study Tools */}
      <div>
        <h2 className={`text-3xl font-bold text-center ${currentThemeColors.cardText} mb-10`}>
          Comprehensive Study Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {studyTools.map((tool, index) => (
            <motion.div
              key={tool.title}
              whileHover={{ y: -5 }}
              className={`${currentThemeColors.cardBg} rounded-2xl p-6 shadow-lg hover:shadow-xl transition`}
            >
              <div className={`p-3 rounded-xl ${currentThemeColors.toolIconBg} ${tool.color} mb-3 inline-block`}>
                <tool.icon className="w-5 h-5" />
              </div>
              <h3 className={`text-xl font-semibold ${currentThemeColors.cardText} mb-1`}>{tool.title}</h3>
              <p className={`${currentThemeColors.secondaryText} text-sm`}>{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSection;