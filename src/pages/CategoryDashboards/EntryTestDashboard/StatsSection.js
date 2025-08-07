import React from 'react';
import { Users, Trophy, Brain, Award } from 'lucide-react';

const StatsSection = ({ animateStats }) => {
  const stats = [
    { label: 'Total Students', value: '50,000+', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { label: 'Success Rate', value: '85%', icon: Trophy, color: 'from-green-500 to-emerald-500' },
    { label: 'Questions Bank', value: '25,000+', icon: Brain, color: 'from-purple-500 to-violet-500' },
    { label: 'Universities', value: '100+', icon: Award, color: 'from-orange-500 to-amber-500' }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 text-center shadow-xl border border-white/20 hover:transform hover:scale-105 transition-all duration-300"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <div
            className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full mb-4 shadow-lg`}
          >
            <stat.icon className="w-8 h-8 text-white" />
          </div>
          <div
            className={`text-3xl font-bold text-gray-800 mb-2 ${animateStats ? 'animate-pulse' : ''}`}
          >
            {stat.value}
          </div>
          <div className="text-gray-600 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
