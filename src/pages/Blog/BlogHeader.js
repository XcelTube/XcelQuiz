import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur bg-white/10 shadow-md py-2' : 'py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">XcelTube</Link>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/">Home</Link>
          <Link to="/blog" className="text-cyan-400">Blog</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white/10 text-white placeholder-white/60 rounded-full px-10 py-2 focus:outline-none focus:bg-white/20 transition-all duration-300 w-10 focus:w-52"
            />
            <Search className="absolute left-3 top-2.5 text-white w-4 h-4" />
          </div>
          <button className="bg-gradient-to-r from-cyan-400 to-pink-500 px-4 py-2 rounded-full text-black font-semibold shadow hover:scale-105 transition">Join Free</button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a1a] px-6 py-4 space-y-3">
          <Link to="/" className="block">Home</Link>
          <Link to="/blog" className="block text-cyan-400">Blog</Link>
          <Link to="/categories" className="block">Categories</Link>
          <Link to="/about" className="block">About</Link>
          <Link to="/contact" className="block">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default BlogHeader;
