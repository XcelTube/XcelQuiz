import React from 'react';

const StatsSection = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
              <p className="text-sm text-green-600 mt-1">{stat.change} this month</p>
            </div>
            <div
              className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform duration-300`}
            >
              <stat.icon className="w-7 h-7 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
