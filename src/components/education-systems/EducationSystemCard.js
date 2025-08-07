import React from 'react';
import { motion } from 'framer-motion';
import ReactCountryFlag from 'react-country-flag';

const EducationSystemCard = ({ system, isHovered, onHoverStart, onHoverEnd, onClick }) => {
  const primaryColor = system?.colors?.primary || 'bg-gray-300';
  const textColor = system?.colors?.text || 'text-black';

  return (
    <motion.div
      key={system.id}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => onHoverStart(system.id)}
      onHoverEnd={() => onHoverEnd(null)}
      onClick={() => onClick(system.id)}
      className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer h-48 ${primaryColor}`}
    >
      <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 ${textColor} text-center`}>
        <ReactCountryFlag countryCode={system.countryCode} svg style={{ width: '2.5em', height: '2.5em' }} />
        <h3 className="text-lg font-bold mt-2">{system.title}</h3>
        <p className="text-xs opacity-90">{system.subtitle}</p>
        <div className="w-full space-y-1 mt-2">
          {system.programs?.map((program, i) => (
            <motion.div key={i} className="text-xs bg-black bg-opacity-20 rounded px-2 py-1">
              {program.name}
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="absolute inset-0 bg-white opacity-0"
        animate={{ opacity: isHovered ? 0.1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default EducationSystemCard;
