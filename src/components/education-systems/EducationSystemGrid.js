import React from 'react';
import EducationSystemCard from './EducationSystemCard';
import { motion } from 'framer-motion';

const EducationSystemGrid = ({ systems, hoveredCard, setHoveredCard, handleCardClick }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    {systems.map((system, index) => (
      <EducationSystemCard
        key={system.id}
        system={system}
        isHovered={hoveredCard === system.id}
        onHoverStart={setHoveredCard}
        onHoverEnd={setHoveredCard}
        onClick={handleCardClick}
      />
    ))}
  </div>
);

export default EducationSystemGrid;
