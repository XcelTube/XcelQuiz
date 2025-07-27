import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const QuizBuilderLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top nav */}
      <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
        <h1 className="text-xl font-bold text-blue-600">XcelQuiz</h1>
        <div className="flex gap-6 text-sm font-medium">
          <NavLink to="/quizbuilder" className={({ isActive }) => isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}>
            Dashboard
          </NavLink>
          <NavLink to="/quizbuilder/quizzes" className={({ isActive }) => isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}>
            My Quizzes
          </NavLink>
          <NavLink to="/quizbuilder/create" className={({ isActive }) => isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}>
            Create Quiz
          </NavLink>
          <NavLink to="/quizbuilder/analytics" className={({ isActive }) => isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}>
            Analytics
          </NavLink>
        </div>
        <div className="flex items-center gap-3">
          <input className="border rounded px-2 py-1 text-sm" placeholder="Search quizzes or topics..." />
          <button className="text-blue-600 font-semibold">Sign Out</button>
        </div>
      </div>

      {/* Page content */}
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default QuizBuilderLayout;
