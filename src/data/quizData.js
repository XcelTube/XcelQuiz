import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import quizData from './quizData';

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const question = quizData[currentQuestion];

  // Timer logic
  useEffect(() => {
    if (quizCompleted) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleNextQuestion();
          return 15;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion, quizCompleted]);

  const handleOptionSelect = (option) => {
    if (selectedOption) return;
    
    setSelectedOption(option);
    const correct = option === question.correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore(prev => prev + 1);
  };

  const handleNextQuestion = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedOption(null);
      setIsCorrect(null);
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setTimeLeft(15);
      } else {
        setQuizCompleted(true);
      }
      setIsTransitioning(false);
    }, 500);
  };

  // Progress bar animation variants
  const progressVariants = {
    initial: { width: '100%' },
    animate: { width: '0%', transition: { duration: 15, ease: 'linear' } }
  };

  // Option animation variants
  const optionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    }),
    correct: { 
      backgroundColor: '#10B981',
      color: 'white',
      scale: 1.03
    },
    incorrect: { 
      backgroundColor: '#EF4444',
      color: 'white'
    },
    selected: {
      scale: 1.05,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
    }
  };

  if (quizCompleted) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quiz Completed!</h2>
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              {score}/{quizData.length}
            </div>
            <p className="text-gray-600 mb-6">
              {score === quizData.length 
                ? "Perfect! You're a quiz master!" 
                : score > quizData.length / 2 
                ? "Great job! You know your stuff!" 
                : "Keep learning and try again!"}
            </p>
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
                setQuizCompleted(false);
                setTimeLeft(15);
              }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Restart Quiz
            </button>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-2xl"
      >
        {/* Progress bar */}
        <div className="h-1 bg-gray-200">
          <motion.div
            key={currentQuestion}
            initial="initial"
            animate="animate"
            variants={progressVariants}
            className="h-full bg-blue-500"
          />
        </div>

        {/* Quiz content */}
        <div className="p-6 md:p-8">
          {/* Question counter and timer */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm font-medium text-gray-500">
              Question {currentQuestion + 1}/{quizData.length}
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-sm font-medium text-gray-700">{timeLeft}s</span>
            </div>
          </div>

          {/* Question */}
          <motion.h2 
            key={`question-${currentQuestion}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl md:text-2xl font-bold text-gray-900 mb-8"
          >
            {question.question}
          </motion.h2>

          {/* Options */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={`options-${currentQuestion}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4 mb-8"
            >
              {question.options.map((option, i) => {
                let variant = 'visible';
                if (selectedOption) {
                  if (option === question.correctAnswer) variant = 'correct';
                  else if (option === selectedOption && !isCorrect) variant = 'incorrect';
                  else if (option === selectedOption) variant = 'selected';
                }
                
                return (
                  <motion.button
                    key={option}
                    custom={i}
                    initial="hidden"
                    animate={variant}
                    variants={optionVariants}
                    whileHover={!selectedOption ? { scale: 1.03 } : {}}
                    whileTap={!selectedOption ? { scale: 0.98 } : {}}
                    onClick={() => handleOptionSelect(option)}
                    disabled={selectedOption}
                    className={`w-full text-left p-4 rounded-lg border border-gray-200 font-medium transition-all ${
                      !selectedOption ? 'hover:bg-gray-50' : ''
                    }`}
                  >
                    {option}
                  </motion.button>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Feedback and next button */}
          {selectedOption && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6"
            >
              <div className={`p-4 rounded-lg mb-6 ${
                isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
              }`}>
                {isCorrect ? (
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Correct! Well done.
                  </div>
                ) : (
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {`Incorrect. The correct answer is ${question.correctAnswer}.`}
                  </div>
                )}
              </div>

              <button
                onClick={handleNextQuestion}
                disabled={isTransitioning}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-70"
              >
                {currentQuestion < quizData.length - 1 ? 'Next Question' : 'See Results'}
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default QuizPage;