import React from 'react';
import { Settings, Users, CheckCircle, Trophy } from 'lucide-react';

const StatsSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Settings />, value: '100K+', label: 'Total Quizzes Created' },
            { icon: <Users />, value: '50K+', label: 'Active Users Monthly' },
            { icon: <CheckCircle />, value: '1M+', label: 'Questions Answered' },
            { icon: <Trophy />, value: '10K+', label: 'Rewards Granted' }
          ].map(({ icon, value, label }, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4 text-blue-600">
                {icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{value}</h3>
              <p className="text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

