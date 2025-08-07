import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Award, Video, Globe, FlaskConical, Newspaper, BrainCircuit, Rocket, BarChart2 } from 'lucide-react';

const GeneralKnowledgeDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [expandedCard, setExpandedCard] = useState(null);

  const subjects = [
    { name: 'Science', icon: <FlaskConical className="w-5 h-5" />, color: 'bg-blue-100 text-blue-600' },
    { name: 'History', icon: <Globe className="w-5 h-5" />, color: 'bg-amber-100 text-amber-600' },
    { name: 'Mathematics', icon: <BookOpen className="w-5 h-5" />, color: 'bg-purple-100 text-purple-600' },
    { name: 'Literature', icon: <Newspaper className="w-5 h-5" />, color: 'bg-green-100 text-green-600' },
    { name: 'Technology', icon: <Rocket className="w-5 h-5" />, color: 'bg-red-100 text-red-600' },
    { name: 'Cognitive Science', icon: <BrainCircuit className="w-5 h-5" />, color: 'bg-indigo-100 text-indigo-600' }
  ];

  const featuredVideos = [
    {
      title: 'The Future of Quantum Computing',
      channel: 'Science Frontier',
      views: '1.2M views',
      thumbnail: 'https://source.unsplash.com/random/300x200/?quantum'
    },
    {
      title: 'Ancient Civilizations Revealed',
      channel: 'History Uncovered',
      views: '856K views',
      thumbnail: 'https://source.unsplash.com/random/300x200/?pyramid'
    },
    {
      title: 'Mastering Calculus in 30 Days',
      channel: 'Math Genius',
      views: '543K views',
      thumbnail: 'https://source.unsplash.com/random/300x200/?math'
    }
  ];

  const latestDiscoveries = [
    {
      title: 'Breakthrough in Fusion Energy',
      summary: 'Scientists achieve net energy gain in nuclear fusion reaction',
      source: 'Nature Journal'
    },
    {
      title: 'AI Solves Protein Folding',
      summary: 'DeepMind\'s AlphaFold 3 predicts structure of nearly all known proteins',
      source: 'Science Daily'
    },
    {
      title: 'Water Found on Exoplanet',
      summary: 'James Webb Telescope detects water vapor in atmosphere of distant world',
      source: 'NASA'
    }
  ];

  const toggleCardExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Quantum Learning Hub
          </h1>
          <div className="flex space-x-2 bg-white rounded-full p-1 shadow-md">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-2 rounded-full ${activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('progress')}
              className={`px-4 py-2 rounded-full ${activeTab === 'progress' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
            >
              My Progress
            </button>
          </div>
        </div>
        <p className="text-lg text-gray-600 mt-2">
          Your gateway to mastering general knowledge across all disciplines
        </p>
      </motion.header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Quick Access Cards */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all cursor-pointer"
              onClick={() => toggleCardExpand('pastPapers')}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-semibold">Past Papers</h2>
              </div>
              <p className="text-gray-600 mb-4">Practice with solved past papers for entry tests</p>
              {expandedCard === 'pastPapers' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-2"
                >
                  <button className="w-full text-left px-3 py-2 bg-blue-50 rounded-lg text-blue-600 hover:bg-blue-100">
                    Mathematics (2015-2023)
                  </button>
                  <button className="w-full text-left px-3 py-2 bg-blue-50 rounded-lg text-blue-600 hover:bg-blue-100">
                    Physics (2018-2023)
                  </button>
                  <button className="w-full text-left px-3 py-2 bg-blue-50 rounded-lg text-blue-600 hover:bg-blue-100">
                    Chemistry (2020-2023)
                  </button>
                </motion.div>
              )}
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all cursor-pointer"
              onClick={() => toggleCardExpand('mcqs')}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                  <Award className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-semibold">Subject-wise MCQs</h2>
              </div>
              <p className="text-gray-600 mb-4">Start focused MCQ tests by subject</p>
              {expandedCard === 'mcqs' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-2"
                >
                  <button className="w-full text-left px-3 py-2 bg-purple-50 rounded-lg text-purple-600 hover:bg-purple-100">
                    Biology (500+ questions)
                  </button>
                  <button className="w-full text-left px-3 py-2 bg-purple-50 rounded-lg text-purple-600 hover:bg-purple-100">
                    Computer Science (300+ questions)
                  </button>
                  <button className="w-full text-left px-3 py-2 bg-purple-50 rounded-lg text-purple-600 hover:bg-purple-100">
                    General Knowledge (1000+ questions)
                  </button>
                </motion.div>
              )}
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all cursor-pointer"
              onClick={() => toggleCardExpand('dailyQuiz')}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-amber-100 rounded-lg text-amber-600">
                  <Clock className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-semibold">Daily Challenge</h2>
              </div>
              <p className="text-gray-600">Test your skills with random timed quizzes</p>
              {expandedCard === 'dailyQuiz' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4"
                >
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="font-medium text-amber-800">Today's Challenge</h3>
                    <p className="text-sm text-amber-600 mt-1">15 questions • 10 minutes</p>
                    <button className="mt-3 w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700">
                      Start Challenge
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.section>

          {/* Subjects Explorer */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800">Knowledge Domains</h2>
              <p className="text-gray-600">Explore subjects and track your mastery</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-6">
              {subjects.map((subject, index) => (
                <motion.div
                  key={subject.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  className={`flex flex-col items-center p-4 rounded-lg cursor-pointer ${subject.color} hover:shadow-md transition-all`}
                >
                  <div className="p-3 bg-white rounded-full mb-2">
                    {subject.icon}
                  </div>
                  <span className="font-medium">{subject.name}</span>
                  <div className="w-full bg-white/50 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div 
                      className="h-full bg-current rounded-full" 
                      style={{ width: `${Math.random() * 70 + 30}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Video Learning Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Video Learning</h2>
                  <p className="text-gray-600">Curated educational content from top creators</p>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  View All
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
              {featuredVideos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                  className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
                >
                  <div className="relative aspect-video bg-gray-200">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                      <div className="text-white">
                        <h3 className="font-medium">{video.title}</h3>
                        <p className="text-sm opacity-80">{video.channel} • {video.views}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Latest Discoveries */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800">Scientific Breakthroughs</h2>
              <p className="text-gray-600">Latest discoveries changing our world</p>
            </div>
            <div className="divide-y divide-gray-100">
              {latestDiscoveries.map((discovery, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                  whileHover={{ backgroundColor: 'rgba(249, 250, 251, 1)' }}
                  className="p-6 cursor-pointer transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600 mt-1">
                      <FlaskConical className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{discovery.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{discovery.summary}</p>
                      <p className="text-xs text-gray-500 mt-2">Source: {discovery.source}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Progress Tracker */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800">Your Learning Journey</h2>
              <p className="text-gray-600">Track your knowledge growth</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">General Knowledge</span>
                    <span className="text-sm text-gray-500">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '78%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Science</span>
                    <span className="text-sm text-gray-500">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '65%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">History</span>
                    <span className="text-sm text-gray-500">52%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '52%' }} />
                  </div>
                </div>
              </div>
              <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg transition-colors font-medium">
                View Detailed Analytics
              </button>
            </div>
          </motion.section>

          {/* Quick Stats */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg overflow-hidden text-white"
          >
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Knowledge Milestones</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold">142</div>
                  <div className="text-sm opacity-80">Quizzes Completed</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold">89%</div>
                  <div className="text-sm opacity-80">Average Score</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold">27</div>
                  <div className="text-sm opacity-80">Learning Streak</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-sm opacity-80">Badges Earned</div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default GeneralKnowledgeDashboard;


