import React, { useState, useEffect } from 'react';
import { Trophy } from 'lucide-react';

// Modular sections
import HeaderSection from './HeaderSection';
import FieldSelector from './FieldSelector';
import StatsSection from './StatsSection';
import PastPapersSection from './PastPapersSection';
import QuickActions from './QuickActions';
import SubjectsSection from './SubjectsSection';
import DailyChallengeSection from './DailyChallengeSection';
import Footer from './Footer';


const EntryTestDashboard = () => {
  const [selectedField, setSelectedField] = useState('medical');
  const [animateStats, setAnimateStats] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-4 sm:p-6 lg:p-8 space-y-16">
        <HeaderSection Trophy={Trophy} />
        <FieldSelector selectedField={selectedField} setSelectedField={setSelectedField} />
        <StatsSection animateStats={animateStats} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <PastPapersSection
            selectedField={selectedField}
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
          />
          <QuickActions />
        </div>
        <SubjectsSection selectedField={selectedField} />
        <DailyChallengeSection />
        <Footer />
        <div className="text-center text-gray-600 mt-12">
          <p className="text-lg">🎯 Your success is our mission. Keep practicing, keep achieving! 🌟</p>
        </div>
      </div>
    </div>
  );
};

export default EntryTestDashboard;

