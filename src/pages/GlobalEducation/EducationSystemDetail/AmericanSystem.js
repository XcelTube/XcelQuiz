import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ✅ Data (fixed relative paths)
import educationBoards from '../../../components/education-systems/american/data/educationBoards';
import gradeLevels from '../../../components/education-systems/american/data/gradeLevels';

// ✅ Components (fixed relative paths)
import AmericanHeroHeader from '../../../components/education-systems/american/AmericanHeroHeader';
import AmericanTabsNav from '../../../components/education-systems/american/AmericanTabsNav';
import AmericanFilters from '../../../components/education-systems/american/AmericanFilters';
import OverviewSection from '../../../components/education-systems/american/OverviewSection';
import SubjectsSection from '../../../components/education-systems/american/SubjectsSection';
import ExamsSection from '../../../components/education-systems/american/ExamsSection';
import ResourcesSection from '../../../components/education-systems/american/ResourcesSection';
import AmericanFooter from '../../../components/education-systems/american/AmericanFooter';

const AmericanSystem = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [selectedBoard, setSelectedBoard] = useState('common-core');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <AmericanHeroHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main className="container mx-auto px-6 py-8">
        <AmericanFilters
          selectedBoard={selectedBoard}
          setSelectedBoard={setSelectedBoard}
          selectedGrade={selectedGrade}
          setSelectedGrade={setSelectedGrade}
          educationBoards={educationBoards}
          gradeLevels={gradeLevels}
        />

        <AmericanTabsNav activeTab={activeTab} setActiveTab={setActiveTab} />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'overview' && (
              <OverviewSection selectedBoard={selectedBoard} />
            )}
            {activeTab === 'subjects' && (
              <SubjectsSection searchTerm={searchTerm} />
            )}
            {activeTab === 'exams' && <ExamsSection />}
            {activeTab === 'resources' && <ResourcesSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      <AmericanFooter />
    </div>
  );
};

export default AmericanSystem;
