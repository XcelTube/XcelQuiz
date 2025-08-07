import React from 'react';
import { motion } from 'framer-motion';
import standardizedTests from './data/standardizedTests';

const ExamsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white p-6 md:p-10 rounded-xl shadow-md mb-8"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Standardized Tests in the U.S.
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6">
        Learn about key national-level assessments like the SAT, ACT, and AP exams that shape college readiness and academic benchmarks.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {standardizedTests.map((test, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="border border-gray-200 p-6 rounded-lg shadow-sm bg-gray-50"
          >
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">{test.name}</h3>
            <p className="text-gray-700 text-sm mb-4">{test.description}</p>

            {/* Resources */}
            <div className="mb-3">
              <p className="text-sm font-medium text-gray-800 mb-1">📘 Resources:</p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {test.resources.map((res, rIdx) => (
                  <li key={rIdx}>
                    {res.type === 'Book' && `${res.title} (${res.publisher})`}
                    {res.type === 'Video' && (
                      <a
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        {res.title}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* External Link */}
            <a
              href={test.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
            >
              Visit Official Site →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ExamsSection;
