import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// ✅ Components (fixed relative paths)
import PakistaniHeroHeader from '../../../components/education-systems/PakistaniSystem/PakistaniHeroHeader';
import PakistaniTabsNav from '../../../components/education-systems/PakistaniSystem/PakistaniTabsNav';
import PakistaniFilters from '../../../components/education-systems/PakistaniSystem/PakistaniFilters';
import OverviewSection from '../../../components/education-systems/PakistaniSystem/OverviewSection';
import SubjectsSection from '../../../components/education-systems/PakistaniSystem/SubjectsSection';
import ResourcesSection from '../../../components/education-systems/PakistaniSystem/ResourcesSection';
import ExamsSection from '../../../components/education-systems/PakistaniSystem/ExamsSection';
import PakistaniFooter from '../../../components/education-systems/PakistaniSystem/PakistaniFooter';

// ✅ Data (fixed relative paths)
import { boards } from '../../../components/education-systems/PakistaniSystem/data/boards';
import { subjectsByGrade } from '../../../components/education-systems/PakistaniSystem/data/subjectsByGrade';
import { resources } from '../../../components/education-systems/PakistaniSystem/data/resources';

const PakistaniSystem = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedBoard, setSelectedBoard] = useState('FBISE');
  const [selectedGrade, setSelectedGrade] = useState('9-10');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSubject, setExpandedSubject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Filters
  const filteredBooks = resources.books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredVideos = resources.videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.channel.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredExams = resources.exams.filter((exam) =>
    exam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exam.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <PakistaniHeroHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <PakistaniTabsNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Filters */}
        {(activeTab === 'overview' || activeTab === 'subjects') && (
          <PakistaniFilters
            boards={boards}
            selectedBoard={selectedBoard}
            setSelectedBoard={setSelectedBoard}
            subjectsByGrade={subjectsByGrade}
            selectedGrade={selectedGrade}
            setSelectedGrade={setSelectedGrade}
          />
        )}

        {/* Dynamic Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'overview' && (
              <OverviewSection
                boards={boards}
                selectedBoard={selectedBoard}
                setSelectedBoard={setSelectedBoard}
              />
            )}
            {activeTab === 'subjects' && (
              <SubjectsSection
                subjectsByGrade={subjectsByGrade}
                selectedGrade={selectedGrade}
                setSelectedGrade={setSelectedGrade}
                expandedSubject={expandedSubject}
                setExpandedSubject={setExpandedSubject}
              />
            )}
            {activeTab === 'resources' && (
              <ResourcesSection
                filteredBooks={filteredBooks}
                filteredVideos={filteredVideos}
              />
            )}
            {activeTab === 'exams' && (
              <ExamsSection filteredExams={filteredExams} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <PakistaniFooter />
    </div>
  );
};

export default PakistaniSystem;
