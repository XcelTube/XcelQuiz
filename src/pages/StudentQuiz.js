import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, Flag, SkipForward, Send } from 'lucide-react';
import { useParams } from 'react-router-dom';

const StudentQuiz = () => {
  const { quizId } = useParams(); // For dynamic quizzes
  const totalQuestions = 20;

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(30 * 60); // 30 mins
  const [answers, setAnswers] = useState({});
  const [reviewLater, setReviewLater] = useState([]);

  const quizData = {
    question: "What is the primary function of a country's central bank in a modern economy?",
    options: [
      "To manage the national debt by issuing bonds",
      "To control monetary policy and ensure financial stability",
      "To directly fund government expenditures through printing money",
      "To regulate international trade agreements"
    ]
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => (prev <= 0 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    setAnswers({ ...answers, [currentQuestion]: index });
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(answers[currentQuestion + 1] ?? null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] ?? null);
    }
  };

  const handleReviewToggle = () => {
    setReviewLater((prev) =>
      prev.includes(currentQuestion)
        ? prev.filter((q) => q !== currentQuestion)
        : [...prev, currentQuestion]
    );
  };

  const handleSubmit = () => {
    console.log("Submitting:", answers);
    // TODO: Call API endpoint
  };

  const questions = Array.from({ length: totalQuestions }, (_, i) => ({
    id: i + 1,
    answered: answers[i + 1] !== undefined,
    current: i + 1 === currentQuestion,
    review: reviewLater.includes(i + 1),
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">X</span>
            </div>
            <span className="text-lg font-semibold text-gray-800">XcelTube</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-300" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar */}
        <aside className="space-y-6 lg:col-span-1">
          {/* Timer and Progress */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-semibold text-gray-700 mb-4">Quiz Progress</h3>
            <div className="text-sm text-gray-600 mb-1">Time Remaining</div>
            <div className="w-full bg-gray-200 h-3 rounded mb-2">
              <div className="h-3 bg-red-500 rounded" style={{ width: `${(timeRemaining / (30 * 60)) * 100}%` }}></div>
            </div>
            <div className="text-center text-2xl font-mono text-red-600">{formatTime(timeRemaining)}</div>
          </div>

          {/* Question Navigator */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-semibold text-gray-700 mb-4">Questions</h3>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((q) => (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestion(q.id)}
                  className={`w-9 h-9 rounded-xl text-sm font-medium
                    ${q.current ? 'bg-red-500 text-white' :
                      q.answered ? 'bg-green-500 text-white' :
                      q.review ? 'bg-yellow-400 text-white' :
                      'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {q.id}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Quiz Panel */}
        <section className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-8 space-y-8">
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-800">Question {currentQuestion}</h2>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              {formatTime(timeRemaining)}
            </div>
          </div>

          <div>
            <p className="text-gray-700 text-lg mb-6">{quizData.question}</p>
            <div className="space-y-4">
              {quizData.options.map((opt, idx) => (
                <div
                  key={idx}
                  onClick={() => handleAnswerSelect(idx)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all
                    ${selectedAnswer === idx ? 'bg-blue-100 border-blue-500' : 'hover:bg-gray-50'}`}
                >
                  <label className="flex items-center space-x-4">
                    <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center 
                      ${selectedAnswer === idx ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}>
                      {selectedAnswer === idx && <div className="w-2 h-2 rounded-full bg-white"></div>}
                    </div>
                    <span className="text-gray-700">{opt}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center border-t pt-6">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 1}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <div className="flex space-x-4">
              <button onClick={handleReviewToggle} className="flex items-center px-4 py-2 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200">
                <Flag className="w-4 h-4 mr-1" /> Review Later
              </button>
              <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                <SkipForward className="w-4 h-4 mr-1" /> Skip
              </button>
              <button
                onClick={handleSubmit}
                disabled={!selectedAnswer}
                className={`flex items-center px-4 py-2 rounded text-white
                  ${selectedAnswer ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-300 cursor-not-allowed'}`}
              >
                <Send className="w-4 h-4 mr-1" /> Submit
              </button>
            </div>

            <button
              onClick={handleNext}
              disabled={currentQuestion === totalQuestions}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudentQuiz;
