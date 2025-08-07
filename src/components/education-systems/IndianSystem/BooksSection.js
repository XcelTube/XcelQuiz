import React from 'react';
import { motion } from 'framer-motion';
import BookItem from './BookItem';

const BooksSection = ({ selectedBoard, selectedClass, getRecommendedBooks }) => {
  return (
    <motion.div
      key="books"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-md p-6"
    >
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">
        Recommended Books for {selectedBoard} – Class {selectedClass}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Textbooks */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">📖 Textbooks</h3>
          <ul className="space-y-3">
            {getRecommendedBooks().map((book, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
                    📘
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{book}</p>
                    <p className="text-sm text-gray-500">Primary textbook for {selectedBoard}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Reference Books */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">📚 Reference Books</h3>
          <ul className="space-y-3">
            {selectedBoard === 'CBSE' && selectedClass === '10' && (
              <>
                <BookItem title="RD Sharma - Mathematics" description="Comprehensive guide with solved examples" />
                <BookItem title="Lakhmir Singh - Science" description="Detailed explanations and practice questions" />
                <BookItem title="Oswaal Question Banks" description="Previous year papers with solutions" />
              </>
            )}
            {selectedBoard === 'CBSE' && selectedClass === '12' && (
              <>
                <BookItem title="HC Verma - Concepts of Physics" description="Must-have for Physics preparation" />
                <BookItem title="RS Aggarwal - Mathematics" description="Complete math reference" />
                <BookItem title="Modern ABC of Chemistry" description="Detailed chemistry concepts" />
              </>
            )}
            {selectedBoard === 'ICSE' && ['9', '10'].includes(selectedClass) && (
              <>
                <BookItem title="Selina Concise Series" description="For all science subjects" />
                <BookItem title="Total History & Civics" description="Complete ICSE history reference" />
                <BookItem title="Together With Series" description="Question banks and practice papers" />
              </>
            )}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default BooksSection;
