import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactCountryFlag from 'react-country-flag';

const previewSystems = [
  {
    id: 'british',
    title: 'British',
    subtitle: 'Internationally Adopted',
    countryCode: 'GB',
    color: 'bg-gradient-to-br from-red-600 to-blue-700 text-white',
  },
  {
    id: 'american',
    title: 'American',
    subtitle: 'Standardized Testing',
    countryCode: 'US',
    color: 'bg-gradient-to-br from-red-500 to-blue-600 text-white',
  },
  {
    id: 'pakistani',
    title: 'Pakistani',
    subtitle: 'National Curriculum',
    countryCode: 'PK',
    color: 'bg-gradient-to-br from-green-500 to-white text-green-900',
  },
  {
    id: 'indian',
    title: 'Indian',
    subtitle: 'Diverse Boards',
    countryCode: 'IN',
    color: 'bg-gradient-to-br from-orange-500 to-green-600 text-white',
  }
];

const EducationSystemsPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          🌍 Explore Global Education Systems
        </h2>
        <p className="text-gray-600 mb-10">
          Discover how high school & pre-university programs differ around the world.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {previewSystems.map((system, index) => (
            <motion.div
              key={system.id}
              className={`rounded-xl p-4 shadow-lg cursor-pointer transition transform hover:scale-105 ${system.color}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(`/education-systems/${system.id}`)}
            >
              <ReactCountryFlag
                countryCode={system.countryCode}
                svg
                style={{
                  fontSize: '2em',
                  marginBottom: '0.5rem',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))'
                }}
              />
              <h3 className="text-lg font-semibold">{system.title}</h3>
              <p className="text-sm opacity-90">{system.subtitle}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <button
            onClick={() => navigate('/education-systems')}
            className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition"
          >
            View All Education Systems
          </button>
        </div>
      </div>
    </section>
  );
};

export default EducationSystemsPreview;
