import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import coreModules from './data/coreModules';

const ModulesSection = ({ currentTheme }) => {
  const [expandedModules, setExpandedModules] = useState({});

  // Theme-aware colors
  const themeColors = {
    light: {
      cardBg: 'bg-white',
      cardText: 'text-gray-800',
      secondaryText: 'text-gray-600',
      border: 'border-gray-200',
      hoverBg: 'hover:bg-gray-100',
      buttonBorder: 'border-gray-300',
      buttonText: 'text-gray-700',
    },
    dark: {
      cardBg: 'bg-gray-800',
      cardText: 'text-white',
      secondaryText: 'text-gray-300',
      border: 'border-gray-700',
      hoverBg: 'hover:bg-gray-700',
      buttonBorder: 'border-gray-600',
      buttonText: 'text-gray-300',
    },
    emerald: {
      cardBg: 'bg-white',
      cardText: 'text-gray-800',
      secondaryText: 'text-gray-600',
      border: 'border-gray-200',
      hoverBg: 'hover:bg-gray-100',
      buttonBorder: 'border-gray-300',
      buttonText: 'text-gray-700',
    },
    rose: {
      cardBg: 'bg-white',
      cardText: 'text-gray-800',
      secondaryText: 'text-gray-600',
      border: 'border-gray-200',
      hoverBg: 'hover:bg-gray-100',
      buttonBorder: 'border-gray-300',
      buttonText: 'text-gray-700',
    },
    ocean: {
      cardBg: 'bg-white',
      cardText: 'text-gray-800',
      secondaryText: 'text-gray-600',
      border: 'border-gray-200',
      hoverBg: 'hover:bg-gray-100',
      buttonBorder: 'border-gray-300',
      buttonText: 'text-gray-700',
    },
  };

  const currentThemeColors = themeColors[currentTheme] || themeColors.light;

  const toggleModule = (moduleId) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }));
  };

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className={`text-3xl md:text-4xl font-bold ${currentThemeColors.cardText} mb-4`}>
          IELTS Modules
        </h1>
        <p className={`text-lg ${currentThemeColors.secondaryText}`}>
          In-depth training for Listening, Reading, Writing & Speaking
        </p>
      </div>

      {Array.isArray(coreModules) &&
        coreModules.map((module, index) => (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`${currentThemeColors.cardBg} rounded-3xl shadow-xl overflow-hidden`}
          >
            <div className={`h-1 bg-gradient-to-r ${module.color}`}></div>
            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left: Info */}
              <div>
                <div
                  className={`inline-flex p-4 rounded-2xl ${module.textColor} bg-opacity-10 mb-4`}
                >
                  <module.icon className="w-8 h-8" />
                </div>
                <h2 className={`text-2xl font-bold ${currentThemeColors.cardText} mb-3`}>
                  {module.title} Module
                </h2>
                <p className={`${currentThemeColors.secondaryText} mb-4`}>
                  {module.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {module.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center ${currentThemeColors.secondaryText}`}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 flex-wrap">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-2 rounded-xl font-semibold text-white bg-gradient-to-r ${module.color} hover:opacity-90 transition`}
                  >
                    Start Module
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-2 rounded-xl font-semibold border ${currentThemeColors.buttonBorder} ${currentThemeColors.buttonText} ${currentThemeColors.hoverBg} transition`}
                    onClick={() => toggleModule(module.id)}
                  >
                    {expandedModules[module.id] ? 'Hide Lessons' : 'View Lessons'}
                  </motion.button>
                </div>
              </div>

              {/* Right: Lessons */}
              <div className="space-y-3">
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`font-semibold ${currentThemeColors.cardText}`}>Lessons</h3>
                  <button
                    onClick={() => toggleModule(module.id)}
                    className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center"
                  >
                    {expandedModules[module.id] ? 'Show Less' : 'Show All'}
                    {expandedModules[module.id] ? (
                      <ChevronUp className="w-4 h-4 ml-1" />
                    ) : (
                      <ChevronDown className="w-4 h-4 ml-1" />
                    )}
                  </button>
                </div>

                {(expandedModules[module.id]
                  ? module.lessons
                  : module.lessons.slice(0, 3)
                ).map((lesson, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-3 rounded-lg ${currentThemeColors.cardBg} border ${currentThemeColors.border}`}
                  >
                    <div className="flex items-center">
                      {lesson.completed ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      ) : (
                        <div className={`w-5 h-5 mr-3 border-2 ${currentThemeColors.buttonBorder} rounded-full`}></div>
                      )}
                      <span
                        className={`${currentThemeColors.cardText} ${
                          lesson.completed ? 'font-medium' : ''
                        }`}
                      >
                        {lesson.title}
                      </span>
                    </div>
                    <span className={`text-sm ${currentThemeColors.secondaryText}`}>
                      {lesson.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
    </div>
  );
};

export default ModulesSection;