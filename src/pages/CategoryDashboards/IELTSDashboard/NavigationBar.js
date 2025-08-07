import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe, BookOpen, Target, BarChart3, Users,
  Settings, Moon, Sun, Bell, Menu, X, ChevronDown,
  LogOut, User, HelpCircle, MessageSquare, Palette
} from 'lucide-react';

// Theme configuration
const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  EMERALD: 'emerald',
  ROSE: 'rose',
  OCEAN: 'ocean'
};

const themeOptions = [
  { id: THEMES.LIGHT, name: 'Light', bg: 'bg-white', text: 'text-gray-900', primary: 'bg-blue-500' },
  { id: THEMES.DARK, name: 'Dark', bg: 'bg-gray-900', text: 'text-gray-100', primary: 'bg-blue-400' },
  { id: THEMES.EMERALD, name: 'Emerald', bg: 'bg-emerald-50', text: 'text-emerald-900', primary: 'bg-emerald-500' },
  { id: THEMES.ROSE, name: 'Rose', bg: 'bg-rose-50', text: 'text-rose-900', primary: 'bg-rose-500' },
  { id: THEMES.OCEAN, name: 'Ocean', bg: 'bg-blue-50', text: 'text-blue-900', primary: 'bg-blue-500' },
];

const themeStyles = {
  [THEMES.LIGHT]: {
    navBg: 'bg-white/90 backdrop-blur-md',
    border: 'border-gray-200',
    hoverBg: 'hover:bg-gray-100/80',
    activeBg: 'bg-blue-100/70',
    activeText: 'text-blue-600',
    notificationBg: 'bg-white',
    dropdownBg: 'bg-white',
    dropdownBorder: 'border-gray-200/80',
    text: 'text-gray-700',
    hoverText: 'hover:text-gray-900',
    buttonHover: 'hover:bg-gray-200/50',
  },
  [THEMES.DARK]: {
    navBg: 'bg-gray-900/90 backdrop-blur-md',
    border: 'border-gray-800',
    hoverBg: 'hover:bg-gray-800/80',
    activeBg: 'bg-blue-900/30',
    activeText: 'text-blue-400',
    notificationBg: 'bg-gray-800',
    dropdownBg: 'bg-gray-800',
    dropdownBorder: 'border-gray-700/80',
    text: 'text-gray-300',
    hoverText: 'hover:text-gray-100',
    buttonHover: 'hover:bg-gray-700/50',
  },
  [THEMES.EMERALD]: {
    navBg: 'bg-emerald-50/90 backdrop-blur-md',
    border: 'border-emerald-200',
    hoverBg: 'hover:bg-emerald-100/80',
    activeBg: 'bg-emerald-100/70',
    activeText: 'text-emerald-600',
    notificationBg: 'bg-emerald-50',
    dropdownBg: 'bg-emerald-50',
    dropdownBorder: 'border-emerald-200/80',
    text: 'text-emerald-800',
    hoverText: 'hover:text-emerald-900',
    buttonHover: 'hover:bg-emerald-200/50',
  },
  [THEMES.ROSE]: {
    navBg: 'bg-rose-50/90 backdrop-blur-md',
    border: 'border-rose-200',
    hoverBg: 'hover:bg-rose-100/80',
    activeBg: 'bg-rose-100/70',
    activeText: 'text-rose-600',
    notificationBg: 'bg-rose-50',
    dropdownBg: 'bg-rose-50',
    dropdownBorder: 'border-rose-200/80',
    text: 'text-rose-800',
    hoverText: 'hover:text-rose-900',
    buttonHover: 'hover:bg-rose-200/50',
  },
  [THEMES.OCEAN]: {
    navBg: 'bg-blue-50/90 backdrop-blur-md',
    border: 'border-blue-200',
    hoverBg: 'hover:bg-blue-100/80',
    activeBg: 'bg-blue-100/70',
    activeText: 'text-blue-600',
    notificationBg: 'bg-blue-50',
    dropdownBg: 'bg-blue-50',
    dropdownBorder: 'border-blue-200/80',
    text: 'text-blue-800',
    hoverText: 'hover:text-blue-900',
    buttonHover: 'hover:bg-blue-200/50',
  },
};

const NavigationBar = ({
  activeSection,
  setActiveSection,
  currentTheme = THEMES.LIGHT,
  setCurrentTheme,
  currentUser,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const validatedTheme = Object.values(THEMES).includes(currentTheme) 
    ? currentTheme 
    : THEMES.LIGHT;

  const navigation = [
    { id: 'home', label: 'Home', icon: Globe },
    { id: 'modules', label: 'Modules', icon: BookOpen },
    { id: 'tests', label: 'Mock Tests', icon: Target },
    { id: 'progress', label: 'Progress', icon: BarChart3 },
    { id: 'community', label: 'Community', icon: Users },
  ];

  const notifications = [
    { id: 1, title: 'New practice test available', time: '10 min ago', read: false },
    { id: 2, title: 'Your progress report is ready', time: '2 hours ago', read: true },
    { id: 3, title: 'Community reply to your question', time: '1 day ago', read: true },
  ];

  const userMenuItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'help', label: 'Help Center', icon: HelpCircle },
    { id: 'feedback', label: 'Send Feedback', icon: MessageSquare },
    { id: 'logout', label: 'Sign Out', icon: LogOut },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const springTransition = {
    type: "spring",
    damping: 20,
    stiffness: 300
  };

  const getThemeClass = (key) => {
    return themeStyles[validatedTheme]?.[key] || '';
  };

  const getPrimaryColor = () => {
    return themeOptions.find(t => t.id === validatedTheme)?.primary || 'bg-blue-500';
  };

  return (
    <motion.nav 
      className={`${getThemeClass('navBg')} shadow-sm sticky top-0 z-50 border-b ${getThemeClass('border')}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
        boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
        borderBottomWidth: scrolled ? "1px" : "0px"
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ rotate: [0, 10, -10, 0] }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center"
            >
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="mr-1"
              >
                🚀
              </motion.span>
              IELTS Master
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 relative">
              {navigation.map((item) => (
                <motion.div
                  key={item.id}
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                  className="relative"
                >
                  <button
                    onClick={() => setActiveSection(item.id)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm flex items-center space-x-2 transition-all ${
                      activeSection === item.id
                        ? `${getThemeClass('activeText')} ${getThemeClass('activeBg')}`
                        : `${getThemeClass('text')} ${getThemeClass('hoverText')} ${getThemeClass('hoverBg')}`
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                  
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${getPrimaryColor()} rounded-full`}
                      transition={springTransition}
                    />
                  )}
                  
                  {hoveredItem === item.id && activeSection !== item.id && (
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${validatedTheme === THEMES.DARK ? 'bg-gray-700/50' : 'bg-gray-300/50'} rounded-full`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            {/* Theme Selector */}
            <div className="relative">
              <motion.button
                onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-full ${getThemeClass('hoverBg')} ${getThemeClass('text')} transition-all`}
              >
                <Palette className="w-5 h-5" />
              </motion.button>

              <AnimatePresence>
                {themeMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.2, type: 'spring' }}
                    className={`absolute right-0 mt-2 w-48 ${getThemeClass('dropdownBg')} rounded-xl shadow-xl overflow-hidden border ${getThemeClass('dropdownBorder')} z-50`}
                  >
                    <div className="p-3 border-b border-gray-100 dark:border-gray-700">
                      <h3 className="font-semibold text-sm">Color Theme</h3>
                    </div>
                    <div className="py-1">
                      {themeOptions.map((theme) => (
                        <motion.button
                          key={theme.id}
                          whileHover={{ 
                            backgroundColor: validatedTheme === THEMES.DARK ? 'rgba(55, 65, 81, 0.5)' : 'rgba(243, 244, 246, 0.5)',
                            scale: 1.02
                          }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setCurrentTheme(theme.id);
                            setThemeMenuOpen(false);
                          }}
                          className={`w-full px-4 py-2 text-left text-sm flex items-center space-x-2 transition-colors ${
                            validatedTheme === theme.id ? 'font-medium' : ''
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-full ${theme.primary} transition-colors`} />
                          <span>{theme.name}</span>
                          {validatedTheme === theme.id && (
                            <motion.div 
                              layoutId="themeCheck"
                              className="ml-auto w-4 h-4 text-blue-500"
                              transition={springTransition}
                            >
                              ✓
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Notifications */}
            <div className="relative">
              <motion.button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-full ${getThemeClass('hoverBg')} ${getThemeClass('text')} transition-all relative`}
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </motion.button>

              <AnimatePresence>
                {notificationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.2, type: 'spring' }}
                    className={`absolute right-0 mt-2 w-80 ${getThemeClass('notificationBg')} rounded-xl shadow-xl overflow-hidden border ${getThemeClass('dropdownBorder')} z-50`}
                  >
                    <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                      <h3 className="font-semibold">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => (
                        <motion.div
                          key={notification.id}
                          whileHover={{ 
                            backgroundColor: validatedTheme === THEMES.DARK ? 'rgba(55, 65, 81, 0.5)' : 'rgba(243, 244, 246, 0.5)',
                            scale: 1.01
                          }}
                          whileTap={{ scale: 0.98 }}
                          className={`p-4 border-b ${getThemeClass('border')} cursor-pointer transition-all ${
                            !notification.read ? `${getThemeClass('activeBg')} bg-opacity-50` : ''
                          }`}
                        >
                          <div className="flex items-start">
                            <div className="flex-shrink-0 pt-0.5">
                              <div className={`w-3 h-3 rounded-full ${getPrimaryColor()}`}></div>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium">
                                {notification.title}
                              </p>
                              <p className={`text-xs ${getThemeClass('text')} opacity-70 mt-1`}>
                                {notification.time}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className={`p-3 text-center ${validatedTheme === THEMES.DARK ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                      <button className={`text-sm font-medium ${validatedTheme === THEMES.DARK ? 'text-blue-400' : 'text-blue-600'} hover:underline transition-colors`}>
                        View all notifications
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* User Menu */}
            <div className="relative hidden md:block">
              <motion.button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center space-x-2 p-1 pr-2 rounded-full ${getThemeClass('hoverBg')} transition-all`}
              >
                <motion.div
                  whileHover={{ rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img 
                    src={currentUser.avatar} 
                    alt={currentUser.name} 
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 shadow-sm"
                  />
                </motion.div>
                <span className={`text-sm font-medium ${getThemeClass('text')}`}>{currentUser.name}</span>
                <motion.div
                  animate={{ rotate: userMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.2, type: 'spring' }}
                    className={`absolute right-0 mt-2 w-56 ${getThemeClass('dropdownBg')} rounded-xl shadow-xl overflow-hidden border ${getThemeClass('dropdownBorder')} z-50`}
                  >
                    <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={currentUser.avatar} 
                          alt={currentUser.name} 
                          className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 shadow-sm"
                        />
                        <div>
                          <p className="text-sm font-medium">{currentUser.name}</p>
                          <p className={`text-xs ${getThemeClass('text')} opacity-70`}>{currentUser.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="py-1">
                      {userMenuItems.map((item) => (
                        <motion.button
                          key={item.id}
                          whileHover={{ 
                            backgroundColor: validatedTheme === THEMES.DARK ? 'rgba(55, 65, 81, 0.5)' : 'rgba(243, 244, 246, 0.5)',
                            scale: 1.02
                          }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-4 py-2 text-left text-sm flex items-center space-x-2 transition-all"
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`md:hidden p-2 rounded-lg ${getThemeClass('hoverBg')} ${getThemeClass('text')} transition-all`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-2">
              {navigation.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full px-4 py-3 rounded-lg font-medium text-sm flex items-center space-x-3 transition-all ${
                    activeSection === item.id
                      ? `${getThemeClass('activeBg')} ${getThemeClass('activeText')}`
                      : `${getThemeClass('text')} ${getThemeClass('hoverBg')}`
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </motion.button>
              ))}

              <div className={`pt-2 border-t ${getThemeClass('border')} space-y-2`}>
                {userMenuItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-4 py-3 rounded-lg font-medium text-sm flex items-center space-x-3 ${getThemeClass('text')} ${getThemeClass('hoverBg')}`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavigationBar;