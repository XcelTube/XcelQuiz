import React from 'react';
import { Play, Target } from 'lucide-react';

const QuickActions = () => {
  return (
    <div className="space-y-6">
      {/* Quick Test Card */}
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer group">
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <Play className="w-6 h-6" />
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">Quick Test</div>
            <div className="text-green-100">Start Now</div>
          </div>
        </div>
        <p className="text-green-100 mb-4">
          Jump into a rapid-fire practice session
        </p>
        <button className="w-full bg-white/20 hover:bg-white/30 rounded-xl py-3 font-semibold transition-all duration-300 group-hover:scale-105">
          Begin Test 🚀
        </button>
      </div>

      {/* Mock Exam Card */}
      <div className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer group">
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">Mock Exam</div>
            <div className="text-purple-100">Full Test</div>
          </div>
        </div>
        <p className="text-purple-100 mb-4">
          Complete exam simulation experience
        </p>
        <button className="w-full bg-white/20 hover:bg-white/30 rounded-xl py-3 font-semibold transition-all duration-300 group-hover:scale-105">
          Start Mock 📝
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
