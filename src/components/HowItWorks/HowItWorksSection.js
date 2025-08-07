import React, { useEffect } from 'react';
import { User, CheckCircle, TrendingUp, Plus, ChevronRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HowItWorksSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const icon = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 10,
      transition: { type: 'spring', stiffness: 400 },
    },
  };

  const steps = [
    {
      icon: <User className="w-6 h-6" />,
      bg: 'bg-gradient-to-br from-red-100 to-red-50',
      iconBg: 'bg-gradient-to-br from-red-500 to-red-600',
      title: 'Sign Up & Get Started',
      description:
        'Create your free XcelQuiz account in minutes and personalize your profile to begin your learning journey.',
    },
    {
      icon: <Plus className="w-6 h-6" />,
      bg: 'bg-gradient-to-br from-yellow-100 to-yellow-50',
      iconBg: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
      title: 'Explore or Create Quizzes',
      description:
        'Dive into our vast library of quizzes or use the intuitive builder to craft your own custom assessments.',
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      bg: 'bg-gradient-to-br from-green-100 to-green-50',
      iconBg: 'bg-gradient-to-br from-green-500 to-green-600',
      title: 'Test Your Knowledge',
      description:
        'Challenge yourself with interactive quizzes, earn points, and unlock rewards as you progress.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      bg: 'bg-gradient-to-br from-blue-100 to-blue-50',
      iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
      title: 'Track Your Progress',
      description:
        'Monitor your performance with detailed analytics and identify areas for improvement and mastery.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How <span className="text-blue-600">XcelQuiz</span> Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your learning experience in just a few simple steps
          </p>
        </motion.div>

        {/* Animated Steps */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Connecting line animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="hidden lg:block absolute top-1/4 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 z-0"
            style={{ originX: 0 }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '100%' } : {}}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            />
          </motion.div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center relative z-10"
            >
              {/* Animated Icon */}
              <motion.div
                variants={icon}
                whileHover="hover"
                className={`w-20 h-20 ${step.bg} rounded-2xl mb-6 flex items-center justify-center shadow-md`}
              >
                <div className={`w-12 h-12 ${step.iconBg} rounded-xl flex items-center justify-center text-white`}>
                  {step.icon}
                </div>
              </motion.div>

              {/* Step Number */}
              <div className="absolute -top-3 -right-3 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md text-sm font-bold text-blue-600">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {step.description}
              </p>

              {/* Learn More Link */}
              <motion.a
                whileHover={{ x: 5 }}
                href="#"
                className="text-blue-600 text-sm font-medium flex items-center justify-center mt-auto"
              >
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium group"
          >
            <span className="relative z-10">Get Started Now</span>
            {/* Animated background on hover */}
            <motion.div
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 z-0"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;


