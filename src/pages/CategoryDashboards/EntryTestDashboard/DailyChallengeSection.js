import React from 'react';
import { Zap, Clock, Star, Brain } from 'lucide-react';

const DailyChallengeSection = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-8 text-white shadow-2xl">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 animate-pulse">
          <Zap className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold mb-2">Daily Challenge Quiz</h2>
        <p className="text-indigo-100 text-lg">
          Test your knowledge with our curated daily challenges
        </p>
      </div>

      {/* Quiz Modes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Timed Quiz */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <Clock className="w-8 h-8 mb-4" />
          <h3 className="text-xl font-bold mb-2">Timed Quiz</h3>
          <p className="text-indigo-100 mb-4">30 questions in 45 minutes</p>
          <button className="w-full bg-white/20 hover:bg-white/30 rounded-xl py-3 font-semibold transition-all duration-300 hover:scale-105">
            Start Timer ⏱️
          </button>
        </div>

        {/* Topic Mix */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <Star className="w-8 h-8 mb-4" />
          <h3 className="text-xl font-bold mb-2">Topic Mix</h3>
          <p className="text-indigo-100 mb-4">Random questions from all subjects</p>
          <button className="w-full bg-white/20 hover:bg-white/30 rounded-xl py-3 font-semibold transition-all duration-300 hover:scale-105">
            Mix It Up 🎲
          </button>
        </div>

        {/* Challenge Mode */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <Brain className="w-8 h-8 mb-4" />
          <h3 className="text-xl font-bold mb-2">Challenge Mode</h3>
          <p className="text-indigo-100 mb-4">Difficulty adapts to your level</p>
          <button className="w-full bg-white/20 hover:bg-white/30 rounded-xl py-3 font-semibold transition-all duration-300 hover:scale-105">
            Challenge Me 💪
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyChallengeSection;
