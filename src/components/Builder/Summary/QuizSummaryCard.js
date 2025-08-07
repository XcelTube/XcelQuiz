import React from 'react';
import { FileText, Clock, Award, Users, Plus, Eye } from 'lucide-react';

const QuizSummaryCard = ({ onCreate, onViewDrafts }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      {/* Title & Status */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Introduction to AI Ethics</h1>
          <p className="text-gray-600">
            A foundational quiz covering the basic principles and common dilemmas in Artificial Intelligence ethics.
          </p>
        </div>
        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Draft</div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <StatItem icon={<FileText className="w-5 h-5 text-blue-600" />} label="Questions" value="6" />
        <StatItem icon={<Clock className="w-5 h-5 text-green-600" />} label="Time Limit" value="30 Min" />
        <StatItem icon={<Award className="w-5 h-5 text-yellow-600" />} label="Rewards" value="5 XCEL" />
        <StatItem icon={<Users className="w-5 h-5 text-purple-600" />} label="Status" value="Sequential" />
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={onCreate}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create New
        </button>
        <button
          onClick={onViewDrafts}
          className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium"
        >
          <Eye className="w-4 h-4 mr-2" />
          View Drafts
        </button>
      </div>
    </div>
  );
};

// Reusable StatItem subcomponent
const StatItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3">
    {icon}
    <div>
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  </div>
);

export default QuizSummaryCard;
