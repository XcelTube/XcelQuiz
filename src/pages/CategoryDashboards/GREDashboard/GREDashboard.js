// src/pages/CategoryDashboards/GREDashboard/index.js

import React, { useState } from 'react';
import HeaderSection from './HeaderSection';
import UserStats from './UserStats';
import ProgressSection from './ProgressSection';
import NavigationTabs from './NavigationTabs';
import ModulesSection from './ModulesSection';
import StudyPlanSection from './StudyPlanSection';
import PracticeSection from './PracticeSection';
import ProgressTabSection from './ProgressTabSection';
import FooterSection from './FooterSection';
import { modules, studyPlan, user } from './coreModules';

const GREDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <HeaderSection user={user} darkMode={darkMode} setDarkMode={setDarkMode} />
      <section className="container mx-auto p-6">
        <UserStats user={user} darkMode={darkMode} />
        <ProgressSection user={user} darkMode={darkMode} />
        <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} darkMode={darkMode} />

        {activeTab === 'overview' && <ModulesSection modules={modules} darkMode={darkMode} />}
        {activeTab === 'study' && <StudyPlanSection studyPlan={studyPlan} darkMode={darkMode} />}
        {activeTab === 'practice' && <PracticeSection darkMode={darkMode} />}
        {activeTab === 'progress' && <ProgressTabSection darkMode={darkMode} />}
      </section>
      <FooterSection darkMode={darkMode} />
    </div>
  );
};

export default GREDashboard;
