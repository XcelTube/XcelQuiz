import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// ✅ Components (corrected paths)
import IndianHeroHeader from '../../../components/education-systems/IndianSystem/IndianHeroHeader';
import IndianTabsNav from '../../../components/education-systems/IndianSystem/IndianTabsNav';
import IndianFilters from '../../../components/education-systems/IndianSystem/IndianFilters';
import OverviewSection from '../../../components/education-systems/IndianSystem/OverviewSection';
import ResourcesSection from '../../../components/education-systems/IndianSystem/ResourcesSection';
import BooksSection from '../../../components/education-systems/IndianSystem/BooksSection';
import ExamsSection from '../../../components/education-systems/IndianSystem/ExamsSection';
import VideosSection from '../../../components/education-systems/IndianSystem/VideosSection';
import IndianFooter from '../../../components/education-systems/IndianSystem/IndianFooter';

// ✅ Data (corrected paths)
import boards from '../../../components/education-systems/IndianSystem/data/boards';
import classes from '../../../components/education-systems/IndianSystem/data/classes';
import subjects from '../../../components/education-systems/IndianSystem/data/subjects';
import competitiveExams from '../../../components/education-systems/IndianSystem/data/competitiveExams';
import getRecommendedBooks from '../../../components/education-systems/IndianSystem/data/recommendedBooks';
import videoResources from '../../../components/education-systems/IndianSystem/data/videoResources';

const IndianSystem = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedBoard, setSelectedBoard] = useState('CBSE');
  const [selectedClass, setSelectedClass] = useState('10');
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabChange = (tab) => setActiveTab(tab);

  const filteredSubjects = subjects[selectedClass] || [];
  const filteredBooks = () => getRecommendedBooks(selectedBoard, selectedClass);

  return (
    <div className="bg-gradient-to-b from-orange-50 to-white min-h-screen">
      <IndianHeroHeader />
      <IndianTabsNav activeTab={activeTab} setActiveTab={handleTabChange} />

      {(activeTab !== 'overview') && (
        <div className="container mx-auto px-4 mt-6">
          <IndianFilters
            boards={boards}
            classes={classes}
            selectedBoard={selectedBoard}
            setSelectedBoard={setSelectedBoard}
            selectedClass={selectedClass}
            setSelectedClass={setSelectedClass}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && <OverviewSection key="overview" boards={boards} />}
          {activeTab === 'resources' && (
            <ResourcesSection
              key="resources"
              board={selectedBoard}
              grade={selectedClass}
              subjects={filteredSubjects}
            />
          )}
          {activeTab === 'books' && (
            <BooksSection
              key="books"
              selectedBoard={selectedBoard}
              selectedClass={selectedClass}
              getRecommendedBooks={filteredBooks}
            />
          )}
          {activeTab === 'exams' && <ExamsSection key="exams" exams={competitiveExams} />}
          {activeTab === 'videos' && (
            <VideosSection key="videos" videos={videoResources} searchQuery={searchQuery} />
          )}
        </AnimatePresence>
      </div>

      <IndianFooter />
    </div>
  );
};

export default IndianSystem;
