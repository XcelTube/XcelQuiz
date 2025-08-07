import React, { useRef } from 'react';
import { Settings, TrendingUp, Puzzle, Share2, Shield, Rocket } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Gamified Learning Experience',
      desc: 'Engage with fun, interactive quizzes and rewarding challenges, designed to keep you motivated and learning.',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Advanced Performance Analytics',
      desc: 'Gain insights into your learning patterns and progress with comprehensive, easy-to-understand reports.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <Puzzle className="w-6 h-6" />,
      title: 'Intuitive Quiz Customization',
      desc: 'Create personalized quizzes with various question types, media integration, and flexible settings.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: 'Collaborative & Sharing Tools',
      desc: 'Share your quizzes with friends, students, or colleagues and foster a collaborative learning environment.',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure & Reliable Platform',
      desc: 'Your data and quiz content are protected with industry-leading security measures, ensuring a safe experience.',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Continuous Feature Enhancements',
      desc: 'Benefit from regular updates and new features that evolve with your learning and teaching needs.',
      color: 'from-orange-500 to-amber-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Powerful Features
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Designed to transform your learning and teaching experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 relative overflow-hidden"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color}`}></div>
              
              <div className={`w-14 h-14 rounded-lg mb-6 flex items-center justify-center bg-gradient-to-br ${feature.color} text-white shadow-md`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg">
            <Shield className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-sm font-medium">Trusted by educators worldwide</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;


