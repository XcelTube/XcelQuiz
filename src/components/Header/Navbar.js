import React, { useState, useEffect, useRef } from 'react';
import { Search, Menu, X, User, BrainCircuit, Rocket, BarChart3, PlusSquare, BookOpen } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Replace with your logo import
import Logo from '../../assets/xceltube-logo.png'; 

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activePath, setActivePath] = useState('/');
  const navigate = useNavigate();
  const location = useLocation();
  const searchRef = useRef(null);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchTerm.trim() !== '') {
      navigate(`/quiz?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      setIsSearchFocused(false);
    }
  };

 const navItems = [
  { name: 'Learn', path: '/', icon: <BrainCircuit size={18} /> },
  { name: 'Quizzes', path: '/quiz', icon: <Rocket size={18} /> },
  { name: 'Create', path: '/quizbuilder', icon: <PlusSquare size={18} /> },
  { name: 'Insights', path: '/analytics', icon: <BarChart3 size={18} /> },
  { name: 'Blog', path: '/blog', icon: <BookOpen size={18} /> }
];

  const mobileNavItems = [
    ...navItems,
    { name: 'Drafts', path: '/quizbuilder?filter=drafts', icon: null },
    { name: 'Login', path: '/login', icon: null },
    { name: 'Sign Up', path: '/signup', icon: null }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm py-2' : 'bg-white/90 backdrop-blur-sm py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {/* Logo with your custom image */}
            <Link to="/" className="flex items-center space-x-2 group relative">
              <motion.div 
                whileHover={{ rotate: 15 }}
                className="w-10 h-10 rounded-lg flex items-center justify-center"
              >
                <img src={Logo} alt="Your Logo" className="w-full h-full object-contain" />
              </motion.div>
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent hidden sm:block"
              >
                XcelTube
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 flex items-center space-x-2 font-medium relative group transition-colors ${
                    activePath === item.path 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-blue-500'
                  }`}
                >
                  <span className={`transition-colors ${
                    activePath === item.path ? 'text-blue-500' : 'text-gray-400 group-hover:text-blue-400'
                  }`}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                  {activePath === item.path && (
                    <motion.div 
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Search & Auth */}
          <div className="flex items-center space-x-4">
            <motion.div 
              ref={searchRef}
              initial={false}
              animate={{
                width: isSearchFocused ? 280 : 180,
                boxShadow: isSearchFocused ? '0 10px 25px -5px rgba(59, 130, 246, 0.2)' : '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
              }}
              className="relative rounded-full bg-white border border-gray-200"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
                onFocus={() => setIsSearchFocused(true)}
                placeholder={isSearchFocused ? "Ask me anything on XcelTube..." : "Search XcelTube..."}
                className="w-full pl-10 pr-4 py-2 bg-transparent focus:outline-none rounded-full placeholder-gray-400 text-sm"
              />
              {isSearchFocused && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full"
                >
                  Press ⏎
                </motion.div>
              )}
            </motion.div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/login" className="px-4 py-2 text-gray-600 hover:text-blue-600 font-medium flex items-center space-x-1 transition-colors">
                <User className="w-4 h-4" />
                <span>Login</span>
              </Link>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/signup"
                  className="relative overflow-hidden px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium flex items-center space-x-1"
                >
                  <span className="relative z-10">Get Started</span>
                  <motion.span 
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button 
              className="md:hidden p-2 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu (Animated) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-6 space-y-4">
                <div className="relative px-4">
                  <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleSearch}
                    placeholder="Search XcelTube..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <nav className="flex flex-col space-y-1 px-2">
                  {mobileNavItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <Link
                        to={item.path}
                        className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                          activePath === item.path
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.icon && (
                          <span className={`mr-3 ${
                            activePath === item.path ? 'text-blue-500' : 'text-gray-400'
                          }`}>
                            {item.icon}
                          </span>
                        )}
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;

