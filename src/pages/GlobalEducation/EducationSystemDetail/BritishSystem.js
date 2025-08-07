import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ✅ Corrected component imports
import BritishHeroHeader from '../../../components/education-systems/british/BritishHeroHeader';
import BritishTabsNav from '../../../components/education-systems/british/BritishTabsNav';
import SubjectFilterBar from '../../../components/education-systems/british/SubjectFilterBar';
import OverviewSection from '../../../components/education-systems/british/OverviewSection';
import SubjectsSection from '../../../components/education-systems/british/SubjectsSection';
import ResourcesSection from '../../../components/education-systems/british/ResourcesSection';
import ExamsSection from '../../../components/education-systems/british/ExamsSection';
import BritishFooter from '../../../components/education-systems/british/BritishFooter';

// ✅ Corrected data imports
import educationBoards from '../../../components/education-systems/british/data/educationBoards';
import subjectsData from '../../../components/education-systems/british/data/subjectsData';
import resourceCards from '../../../components/education-systems/british/data/resourceCards';
import examTimetables from '../../../components/education-systems/british/data/examTimetables';

const BritishSystem = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [expandedSubject, setExpandedSubject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const allLevels = [...new Set(subjectsData.flatMap(subject => subject.levels))];

  const filteredSubjects = subjectsData.filter(subject => {
    const matchesSearch = subject.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBoard = selectedBoard === 'all' || subject.boards.includes(selectedBoard);
    const matchesLevel = selectedLevel === 'all' || subject.levels.includes(selectedLevel);
    return matchesSearch && matchesBoard && matchesLevel;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-7xl mx-auto">
        <BritishHeroHeader />
        <BritishTabsNav activeTab={activeTab} setActiveTab={setActiveTab} />
        <SubjectFilterBar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedBoard={selectedBoard}
          setSelectedBoard={setSelectedBoard}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
          allLevels={allLevels}
          educationBoards={educationBoards}
        />

        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="mb-16">
            {activeTab === 'overview' && (
              <OverviewSection educationBoards={educationBoards} subjectsData={subjectsData} />
            )}
            {activeTab === 'subjects' && (
              <SubjectsSection 
                filteredSubjects={filteredSubjects} 
                expandedSubject={expandedSubject}
                setExpandedSubject={setExpandedSubject}
                educationBoards={educationBoards}
              />
            )}
            {activeTab === 'resources' && (
              <ResourcesSection resourceCards={resourceCards} />
            )}
            {activeTab === 'exams' && (
              <ExamsSection examTimetables={examTimetables} educationBoards={educationBoards} subjectsData={subjectsData} />
            )}
          </motion.div>
        </AnimatePresence>

        <BritishFooter />
      </motion.div>
    </div>
  );
};

export default BritishSystem;
