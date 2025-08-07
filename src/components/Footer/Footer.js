import React from 'react';
import {
  Linkedin, Twitter, Youtube, Github,
  ChevronDown, BookOpen, User, Rocket,
  Video, Code, Wallet, Network,
  Shield, Globe, MessageSquare, Zap,
  Award, CreditCard, Users
} from 'lucide-react';
import { motion } from 'framer-motion';

// Top of Footer.js
import Logo from '../../assets/xceltube-logo.png'; // Adjust path if needed


const Footer = () => {
  const xcelProducts = [
    { name: "XcelTube", desc: "Main Learning Platform", icon: <Video className="text-blue-400" /> },
    { name: "XcelMentor", desc: "1:1 Mentorship", icon: <User className="text-purple-400" /> },
    { name: "XcelLMS", desc: "Learning System", icon: <BookOpen className="text-green-400" /> },
    { name: "Tutor-X", desc: "Uber for Tutors", icon: <Users className="text-yellow-400" /> },
    { name: "Xcel Startup Lab", desc: "Incubator", icon: <Rocket className="text-red-400" /> },
    { name: "XcelLive", desc: "Live Classes", icon: <MessageSquare className="text-pink-400" /> },
    { name: "XcelHack", desc: "Coding Challenges", icon: <Code className="text-indigo-400" /> },
    { name: "XcelWallet", desc: "Payments", icon: <CreditCard className="text-teal-400" /> },
    { name: "XcelDynasty", desc: "Learner Network", icon: <Network className="text-orange-400" /> }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Glowing Top Border */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-16"></div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
            <img
              src={Logo}
             alt="XcelTube Logo"
               className="w-12 h-12 object-contain rounded-xl shadow-lg shadow-blue-500/20"
                 />
               <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">
                 XcelTube
                 </span>
                   </div>

            <p className="text-gray-400">
              The future of interactive learning
            </p>

            {/* Socials with Hover Glow */}
            <div className="flex space-x-5">
              {[Twitter, Linkedin, Youtube, Github].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <Icon className="w-5 h-5 text-gray-300 hover:text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Xcel Ecosystem - Animated Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 flex items-center">
              <Zap className="mr-2 text-yellow-400" /> Xcel Ecosystem
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {xcelProducts.map((product, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5 }}
                  className="p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-gradient-to-br from-blue-900/30 to-blue-800/30">
                      {product.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-white group-hover:text-blue-300 transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">
                        {product.desc}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                {["Blog", "Help Center", "Careers", "Press", "Research"].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white flex items-center transition-colors">
                      <ChevronDown className="w-4 h-4 mr-2 text-blue-400 rotate-90" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {["Terms", "Privacy", "Cookies", "Copyright"].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white flex items-center transition-colors">
                      <Shield className="w-4 h-4 mr-2 text-blue-400" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center backdrop-blur-sm bg-gray-800/30 rounded-xl p-6"
        >
          <div className="flex items-center mb-4 md:mb-0">
            <Globe className="text-gray-400 mr-2" />
            <div className="relative">
              <select className="appearance-none bg-gray-800/50 text-gray-300 text-sm px-3 py-2 pr-8 rounded-lg border border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500/30 cursor-pointer">
                <option>English</option>
                <option>Español</option>
                <option>Français</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} XcelTube. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Accessibility
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
