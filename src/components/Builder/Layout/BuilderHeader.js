import React from 'react';
import { Search, Bell, Settings, Zap } from 'lucide-react';

const BuilderHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Logo + Nav */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">XcelQuiz</span>
          </div>

          {/* Nav */}
          <nav className="flex items-center space-x-6">
            <a href="/dashboard" className="text-gray-600 hover:text-gray-900 font-medium">Dashboard</a>
            <a href="#" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">My Quizzes</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Templates</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Analytics</a>
          </nav>
        </div>

        {/* Right: Search + Actions */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search quizzes or topics..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
          </div>

          {/* Icons */}
          <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />
          <Settings className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />

          {/* User Avatar */}
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer">
            <span className="text-white text-sm font-semibold">JD</span>
          </div>
          <button className="text-gray-600 hover:text-gray-900 font-medium">Sign Out</button>
        </div>
      </div>
    </header>
  );
};

export default BuilderHeader;

