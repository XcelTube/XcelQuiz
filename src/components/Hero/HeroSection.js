import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Settings, BarChart3, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const buttons = [
    {
      text: 'Start Quiz',
      icon: <Rocket className="w-5 h-5" />,
      action: () => navigate('/quiz'),
      color: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
      isPrimary: true
    },
    {
      text: 'Create Quiz',
      icon: <Settings className="w-5 h-5" />,
      action: () => navigate('/quizbuilder'),
      color: 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50',
      isPrimary: false
    },
    {
      text: 'View Drafts',
      icon: <BookOpen className="w-5 h-5" />,
      action: () => navigate('/quizbuilder?filter=drafts'),
      color: 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50',
      isPrimary: false
    },
    {
      text: 'Quiz Analytics',
      icon: <BarChart3 className="w-5 h-5" />,
      action: () => navigate('/quizbuilder/analytics'),
      color: 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50',
      isPrimary: false
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* White bottom half */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white z-0"></div>

      {/* Cosmic top half with subtle stars */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-900 to-indigo-900 z-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animationDuration: `${Math.random() * 5 + 5}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-white">Ignite Your</span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              Knowledge
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Master subjects, track progress, and earn rewards with our intelligent learning platform.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.8
              }
            }
          }}
        >
          {buttons.map((button, index) => (
            <motion.button
              key={button.text}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                  }
                }
              }}
              whileHover={{ 
                y: -3,
                scale: 1.03,
                boxShadow: button.isPrimary 
                  ? '0 10px 25px -5px rgba(59, 130, 246, 0.5)'
                  : '0 5px 15px -5px rgba(0, 0, 0, 0.1)'
              }}
              whileTap={{ scale: 0.98 }}
              onClick={button.action}
              className={`px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-all duration-300 ${button.color} ${button.isPrimary ? 'text-white shadow-lg' : 'shadow-md'}`}
            >
              {button.icon}
              <span>{button.text}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Floating mockup image (replace with your actual image) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 mx-auto max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200"
        >
          <div className="aspect-video bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center">
            <p className="text-gray-400">Your Platform Screenshot</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

