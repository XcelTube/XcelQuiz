// IELTSDashboard.js (Updated with Multi-Theme Support)
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import NavigationBar from './NavigationBar';
import FeedbackModal from './FeedbackModal';
import HomeSection from './HomeSection';
import ModulesSection from './ModulesSection';
import TestsSection from './TestsSection';
import ProgressSection from './ProgressSection';
import CommunitySection from './CommunitySection';

const IELTSDashboard = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [currentTheme, setCurrentTheme] = useState('light'); // Changed from darkMode to currentTheme
  const [testStarted, setTestStarted] = useState(false);
  const [testTime, setTestTime] = useState(0);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [currentUser, setCurrentUser] = useState({ 
    name: 'Sarah', 
    band: 6.5, 
    target: 8.0,
    streak: 8,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  });

  // Theme class mapping for the main background
  const themeBackgrounds = {
    light: 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100',
    dark: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
    emerald: 'bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100',
    rose: 'bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-100',
    ocean: 'bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-100'
  };

  useEffect(() => {
    // Check system preference for initial theme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setCurrentTheme('dark');
    }
    // Apply theme class to document
    document.documentElement.className = currentTheme;
  }, [currentTheme]);

  useEffect(() => {
    let interval;
    if (testStarted) {
      interval = setInterval(() => {
        setTestTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [testStarted]);

  const startTest = () => {
    setTestStarted(true);
    setTestTime(0);
  };

  const endTest = () => {
    setTestStarted(false);
    setShowFeedbackModal(true);
  };

  const renderContent = () => {
    switch(activeSection) {
      case 'home':
        return <HomeSection currentUser={currentUser} startTest={startTest} testStarted={testStarted} testTime={testTime} endTest={endTest} />;
      case 'modules':
        return <ModulesSection />;
      case 'tests':
        return <TestsSection currentUser={currentUser} startTest={startTest} testStarted={testStarted} testTime={testTime} endTest={endTest} />;
      case 'progress':
        return <ProgressSection currentUser={currentUser} />;
      case 'community':
        return <CommunitySection />;
      default:
        return <HomeSection currentUser={currentUser} startTest={startTest} testStarted={testStarted} testTime={testTime} endTest={endTest} />;
    }
  };

  return (
    <div className={`min-h-screen ${themeBackgrounds[currentTheme] || themeBackgrounds.light}`}>
      <div className="sticky top-0 z-50">
        <NavigationBar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          currentTheme={currentTheme}  // Changed from darkMode
          setCurrentTheme={setCurrentTheme}  // Changed from setDarkMode
          currentUser={currentUser}
        />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {renderContent()}
      </main>

      <AnimatePresence>
        {showFeedbackModal && (
          <FeedbackModal setShowFeedbackModal={setShowFeedbackModal} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default IELTSDashboard;