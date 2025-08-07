import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Star } from 'lucide-react';

const CommunitySection = ({ currentTheme }) => {
  // Theme-aware colors
  const themeColors = {
    light: {
      cardBg: 'bg-white',
      cardText: 'text-gray-800',
      secondaryText: 'text-gray-600',
      border: 'border-gray-200',
      hoverBg: 'hover:bg-gray-50',
      buttonBg: 'bg-blue-600',
      buttonHover: 'hover:bg-blue-700',
      successButtonBg: 'bg-green-600',
      successButtonHover: 'hover:bg-green-700',
      activeIndicator: 'bg-green-500',
    },
    dark: {
      cardBg: 'bg-gray-800',
      cardText: 'text-white',
      secondaryText: 'text-gray-400',
      border: 'border-gray-700',
      hoverBg: 'hover:bg-gray-700',
      buttonBg: 'bg-blue-500',
      buttonHover: 'hover:bg-blue-600',
      successButtonBg: 'bg-green-500',
      successButtonHover: 'hover:bg-green-600',
      activeIndicator: 'bg-green-400',
    },
    emerald: {
      cardBg: 'bg-white',
      cardText: 'text-gray-800',
      secondaryText: 'text-gray-600',
      border: 'border-gray-200',
      hoverBg: 'hover:bg-gray-50',
      buttonBg: 'bg-emerald-600',
      buttonHover: 'hover:bg-emerald-700',
      successButtonBg: 'bg-green-600',
      successButtonHover: 'hover:bg-green-700',
      activeIndicator: 'bg-green-500',
    },
    rose: {
      cardBg: 'bg-white',
      cardText: 'text-gray-800',
      secondaryText: 'text-gray-600',
      border: 'border-gray-200',
      hoverBg: 'hover:bg-gray-50',
      buttonBg: 'bg-rose-600',
      buttonHover: 'hover:bg-rose-700',
      successButtonBg: 'bg-green-600',
      successButtonHover: 'hover:bg-green-700',
      activeIndicator: 'bg-green-500',
    },
    ocean: {
      cardBg: 'bg-white',
      cardText: 'text-gray-800',
      secondaryText: 'text-gray-600',
      border: 'border-gray-200',
      hoverBg: 'hover:bg-gray-50',
      buttonBg: 'bg-blue-600',
      buttonHover: 'hover:bg-blue-700',
      successButtonBg: 'bg-green-600',
      successButtonHover: 'hover:bg-green-700',
      activeIndicator: 'bg-green-500',
    },
  };

  const currentThemeColors = themeColors[currentTheme] || themeColors.light;

  const discussions = [
    { user: 'Alex M.', topic: 'Writing Task 2 - Environment Essays', replies: 15, time: '2h ago', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { user: 'Sarah K.', topic: 'Speaking Part 2 - Cue Card Tips', replies: 23, time: '4h ago', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { user: 'Mike R.', topic: 'Listening Section 4 - Academic Lectures', replies: 8, time: '6h ago', avatar: 'https://randomuser.me/api/portraits/men/22.jpg' }
  ];

  const successStories = [
    { name: 'Ahmed Ali', score: 8.5, country: 'Pakistan', quote: 'This platform helped me achieve my dream score!', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Maria Garcia', score: 8.0, country: 'Spain', quote: 'The speaking practice was incredibly helpful.', avatar: 'https://randomuser.me/api/portraits/women/65.jpg' },
    { name: 'David Chen', score: 9.0, country: 'China', quote: 'Best IELTS preparation resource I have used.', avatar: 'https://randomuser.me/api/portraits/men/75.jpg' }
  ];

  const webinars = [
    { title: 'IELTS Writing Masterclass', date: 'Aug 5, 2025', time: '2:00 PM', instructor: 'Dr. Smith', seats: '32/50' },
    { title: 'Speaking Confidence Workshop', date: 'Aug 8, 2025', time: '10:00 AM', instructor: 'Prof. Johnson', seats: '15/50' }
  ];

  const studyGroups = [
    { name: 'Band 7+ Achievers', members: 245, active: true, focus: 'All Skills' },
    { name: 'Writing Task 2 Focus', members: 189, active: false, focus: 'Writing' },
    { name: 'Speaking Practice Partners', members: 312, active: true, focus: 'Speaking' }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className={`text-3xl md:text-4xl font-bold ${currentThemeColors.cardText} mb-3`}>
          IELTS Community
        </h1>
        <p className={`text-lg ${currentThemeColors.secondaryText}`}>
          Connect, Learn, and Succeed Together
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Discussions */}
          <div className={`${currentThemeColors.cardBg} rounded-2xl shadow-md p-6`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-xl font-bold ${currentThemeColors.cardText}`}>Recent Discussions</h2>
              <button className="text-blue-600 dark:text-blue-400 font-medium text-sm">View All</button>
            </div>
            <div className="space-y-4">
              {discussions.map((discussion, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                  className={`border ${currentThemeColors.border} rounded-xl p-4 ${currentThemeColors.hoverBg} cursor-pointer`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <img src={discussion.avatar} alt={discussion.user} className="w-8 h-8 rounded-full" />
                    <span className={`font-medium ${currentThemeColors.cardText}`}>{discussion.user}</span>
                  </div>
                  <h3 className={`font-medium ${currentThemeColors.cardText} mb-2`}>{discussion.topic}</h3>
                  <div className={`flex justify-between text-sm ${currentThemeColors.secondaryText}`}>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      <span>{discussion.replies} replies</span>
                    </div>
                    <span>{discussion.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Success Stories */}
          <div className={`${currentThemeColors.cardBg} rounded-2xl shadow-md p-6`}>
            <h2 className={`text-xl font-bold ${currentThemeColors.cardText} mb-6`}>Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className={`border ${currentThemeColors.border} rounded-xl p-5 hover:shadow-md transition`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <img src={story.avatar} alt={story.name} className="w-10 h-10 rounded-full" />
                      <h3 className={`font-bold ${currentThemeColors.cardText}`}>{story.name}</h3>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-bold text-green-600 dark:text-green-400">{story.score}</span>
                    </div>
                  </div>
                  <p className={`${currentThemeColors.secondaryText} text-sm mb-2`}>"{story.quote}"</p>
                  <p className={`text-xs ${currentThemeColors.secondaryText}`}>{story.country}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="space-y-6">
          {/* Upcoming Webinars */}
          <div className={`${currentThemeColors.cardBg} rounded-2xl shadow-md p-6`}>
            <h3 className={`text-xl font-bold ${currentThemeColors.cardText} mb-4`}>Upcoming Webinars</h3>
            <div className="space-y-4">
              {webinars.map((webinar, index) => (
                <div key={index} className={`border ${currentThemeColors.border} rounded-xl p-4`}>
                  <h4 className={`font-medium ${currentThemeColors.cardText} mb-1`}>{webinar.title}</h4>
                  <div className={`text-sm ${currentThemeColors.secondaryText} space-y-1 mb-2`}>
                    <p>{webinar.date} at {webinar.time}</p>
                    <p>with {webinar.instructor}</p>
                    <p className="text-xs">{webinar.seats} seats available</p>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className={`w-full ${currentThemeColors.buttonBg} text-white py-2 rounded-lg text-sm font-medium ${currentThemeColors.buttonHover} transition`}
                  >
                    Register Free
                  </motion.button>
                </div>
              ))}
            </div>
          </div>

          {/* Study Groups */}
          <div className={`${currentThemeColors.cardBg} rounded-2xl shadow-md p-6`}>
            <h3 className={`text-xl font-bold ${currentThemeColors.cardText} mb-4`}>Study Groups</h3>
            <div className="space-y-3">
              {studyGroups.map((group, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                  className={`flex justify-between items-center p-3 border ${currentThemeColors.border} rounded-lg ${currentThemeColors.hoverBg} cursor-pointer`}
                >
                  <div>
                    <h4 className={`font-medium ${currentThemeColors.cardText}`}>{group.name}</h4>
                    <div className={`flex items-center gap-2 text-xs ${currentThemeColors.secondaryText}`}>
                      <span>{group.members} members</span>
                      <span>•</span>
                      <span>{group.focus}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${group.active ? currentThemeColors.activeIndicator : 'bg-gray-400'}`}></div>
                    <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">Join</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ask a Question */}
          <div className={`${currentThemeColors.cardBg} rounded-2xl shadow-md p-6`}>
            <h3 className={`text-xl font-bold ${currentThemeColors.cardText} mb-4`}>Ask a Question</h3>
            <div className="space-y-3">
              <textarea
                rows={3}
                placeholder="Ask the community for help..."
                className={`w-full p-3 border ${currentThemeColors.border} rounded-lg bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${currentThemeColors.cardText}`}
              ></textarea>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className={`w-full ${currentThemeColors.successButtonBg} text-white py-2 rounded-lg font-medium ${currentThemeColors.successButtonHover} transition`}
              >
                Post Question
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;