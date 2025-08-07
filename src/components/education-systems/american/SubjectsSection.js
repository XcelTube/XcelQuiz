import React from 'react';
import { motion } from 'framer-motion';
import subjects from './data/subjects';

const SubjectsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white p-6 md:p-10 rounded-xl shadow-md mb-8"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Subject Areas</h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6">
        Browse subject-wise breakdown of the U.S. curriculum including books, videos, and exams.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(subjects).map(([name, data]) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-50 border border-gray-200 p-5 rounded-lg shadow-sm"
          >
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">{name}</h3>
            <p className="text-gray-600 text-sm mb-4">{data.description}</p>

            {/* Recommended Books */}
            <div className="mb-3">
              <p className="font-medium text-sm text-gray-800">📚 Books:</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {data.resources.books.slice(0, 2).map((book, idx) => (
                  <li key={idx}>{book}</li>
                ))}
              </ul>
            </div>

            {/* Videos */}
            <div className="mb-3">
              <p className="font-medium text-sm text-gray-800">🎥 Videos:</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {data.resources.videos.slice(0, 2).map((video, idx) => (
                  <li key={idx}>
                    <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                      {video.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exams */}
            <div>
              <p className="font-medium text-sm text-gray-800">📝 Exams:</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {data.resources.exams.slice(0, 3).map((exam, idx) => (
                  <li key={idx}>{exam}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SubjectsSection;
