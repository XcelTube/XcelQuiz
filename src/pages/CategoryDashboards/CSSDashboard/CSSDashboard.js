import React, { useState, useEffect } from 'react';

// Components
import HeaderSection from './HeaderSection';
import StatsSection from './StatsSection';
import QuickActionsSection from './QuickActionsSection';
import PastPapersSection from './PastPapersSection';
import SubjectsSection from './SubjectsSection';
import BoardsSection from './BoardsSection';
import BoardComparison from './BoardComparison';

// Data & Utils
import { subjects, pastPapers, quizBoards } from './data';

import { Brain, FileText, Trophy, Users } from 'lucide-react';

const CSSDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    {
      title: 'Total Questions',
      value: '12,500+',
      icon: Brain,
      color: 'from-blue-500 to-blue-600',
      change: '+1,200'
    },
    {
      title: 'Past Papers',
      value: '400+',
      icon: FileText,
      color: 'from-green-500 to-green-600',
      change: '+20'
    },
    {
      title: 'Active Students',
      value: '45,000+',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      change: '+5,500'
    },
    {
      title: 'Success Rate',
      value: '78%',
      icon: Trophy,
      color: 'from-orange-500 to-orange-600',
      change: '+3%'
    }
  ];

  // Generate 20 years back from 2024
  const years = Array.from({ length: 20 }, (_, i) => 2024 - i);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header Section with Navigation */}
      <HeaderSection activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-10">
            <StatsSection stats={stats} />
            <QuickActionsSection />
          </div>
        )}

        {/* Past Papers Tab */}
        {activeTab === 'pastpapers' && (
          <PastPapersSection
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            years={years}
            pastPapers={pastPapers}
          />
        )}

        {/* Subjects Tab */}
        {activeTab === 'subjects' && (
          <SubjectsSection
            subjects={subjects}
            selectedSubject={selectedSubject}
            setSelectedSubject={setSelectedSubject}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        )}

        {/* Boards Tab */}
        {activeTab === 'boards' && (
          <>
            <BoardsSection quizBoards={quizBoards} />
            <BoardComparison quizBoards={quizBoards} />
          </>
        )}
      </div>
    </div>
  );
};

export default CSSDashboard;
