import React, { useState } from 'react';

import BuilderHeader from '../components/Builder/Layout/BuilderHeader';
import QuizSummaryCard from '../components/Builder/Summary/QuizSummaryCard';
import BuilderTabs from '../components/Builder/Tabs/BuilderTabs';

import PanelDetails from '../components/Builder/Panels/PanelDetails';
import PanelQuestions from '../components/Builder/Panels/PanelQuestions';
import PanelSettings from '../components/Builder/Panels/PanelSettings';
import PanelRewards from '../components/Builder/Panels/PanelRewards';

import AITipsSidebar from '../components/Builder/Sidebar/AITipsSidebar';

const QuizBuilder = () => {
  // Tab state
  const [activeTab, setActiveTab] = useState('details');

  // Quiz form state
  const [quizTitle, setQuizTitle] = useState('Introduction to AI Ethics');
  const [quizDescription, setQuizDescription] = useState(
    'A foundational quiz covering the basic principles and common dilemmas in Artificial Intelligence ethics.'
  );
  const [quizTopic, setQuizTopic] = useState('');
  const [difficulty, setDifficulty] = useState('Medium');
  const [numQuestions, setNumQuestions] = useState(5);

  // Action handlers
  const handleGenerateQuestions = () => {
    alert(`Generating ${numQuestions} ${difficulty.toLowerCase()} questions about "${quizTopic || 'AI Ethics'}"`);
  };

  const handleCreateNewQuiz = () => {
    alert('Creating new quiz...');
  };

  const handleViewDrafts = () => {
    alert('Viewing all drafts...');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <BuilderHeader />

      <div className="flex">
        {/* Left: Main Builder Area */}
        <div className="flex-1 p-6">
          <QuizSummaryCard
            onCreate={handleCreateNewQuiz}
            onViewDrafts={handleViewDrafts}
          />

          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <BuilderTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Render active tab panel */}
            {activeTab === 'details' && (
              <PanelDetails
                quizTitle={quizTitle}
                setQuizTitle={setQuizTitle}
                quizDescription={quizDescription}
                setQuizDescription={setQuizDescription}
                quizTopic={quizTopic}
                setQuizTopic={setQuizTopic}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                numQuestions={numQuestions}
                setNumQuestions={setNumQuestions}
                onGenerate={handleGenerateQuestions}
              />
            )}
            {activeTab === 'questions' && <PanelQuestions />}
            {activeTab === 'settings' && <PanelSettings />}
            {activeTab === 'rewards' && <PanelRewards />}
          </div>
        </div>

        {/* Right: Sidebar Tips */}
        <AITipsSidebar />
      </div>
    </div>
  );
};

export default QuizBuilder;
