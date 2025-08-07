import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { EducationSystemGrid } from '../components/education-systems';
import systemsData from '../data/educationSystemsData'; // (optional) move mock data there

const StarBackground = () => {
  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    opacity: Math.random() * 0.5 + 0.3
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: star.left,
            top: star.top,
            opacity: star.opacity
          }}
          animate={{ opacity: [star.opacity, star.opacity * 0.5] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      ))}
    </div>
  );
};

const EducationSystems = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (systemId) => {
    navigate(`/education-systems/${systemId}`);
  };

  return (
    <section className="relative min-h-screen py-12 bg-gradient-to-b from-indigo-900 via-purple-900 to-gray-900 overflow-hidden">
      <StarBackground />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-500 blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🌎 Global Education Systems
          </h2>
          <p className="text-lg text-purple-200">
            High School & Pre-University Programs Worldwide
          </p>
        </motion.div>

        <EducationSystemGrid
          systems={systemsData}
          hoveredCard={hoveredCard}
          setHoveredCard={setHoveredCard}
          handleCardClick={handleCardClick}
        />

        {/* Info panel for mobile */}
        <AnimatePresence>
          {hoveredCard && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-6 p-4 rounded-lg backdrop-blur-md bg-white bg-opacity-10 border border-white border-opacity-20 text-white text-sm md:hidden"
            >
              {systemsData.find(sys => sys.id === hoveredCard)?.programs.map((program, i) => (
                <div key={i} className="mb-2">
                  <div className="font-semibold">{program.name}</div>
                  <div className="opacity-80">{program.description}</div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EducationSystems;
