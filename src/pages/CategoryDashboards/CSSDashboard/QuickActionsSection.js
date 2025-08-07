import React from 'react';
import { PlayCircle, Target, TrendingUp } from 'lucide-react';

const QuickActionsSection = () => {
  const actions = [
    {
      id: 'practice',
      icon: PlayCircle,
      title: 'Start Practice',
      description: 'Begin your CSS preparation journey with curated practice tests',
      bgColor: 'from-blue-600 to-blue-700',
      buttonText: 'Start Now'
    },
    {
      id: 'mock',
      icon: Target,
      title: 'Mock Tests',
      description: 'Take full-length mock tests to simulate real exam conditions',
      bgColor: 'from-purple-600 to-purple-700',
      buttonText: 'Take Test'
    },
    {
      id: 'progress',
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Monitor your improvement with detailed analytics and insights',
      bgColor: 'from-green-600 to-green-700',
      buttonText: 'View Progress'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {actions.map((action) => (
        <div
          key={action.id}
          className={`bg-gradient-to-br ${action.bgColor} rounded-3xl p-8 text-white shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
        >
          <action.icon className="w-12 h-12 mb-4 opacity-80" />
          <h3 className="text-2xl font-bold mb-2">{action.title}</h3>
          <p className="text-blue-100 mb-4">{action.description}</p>
          <button className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-xl font-medium hover:bg-white/30 transition-all duration-300">
            {action.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default QuickActionsSection;
