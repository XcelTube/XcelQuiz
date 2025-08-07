import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiBook, FiVideo, FiDownload,
  FiClock, FiChevronDown, FiChevronUp
} from 'react-icons/fi';

const SubjectsSection = ({
  filteredSubjects,
  expandedSubject,
  setExpandedSubject,
  educationBoards
}) => {
  const toggleSubject = (subjectId) => {
    setExpandedSubject(expandedSubject === subjectId ? null : subjectId);
  };

  const getBoardColor = (boardId) => {
    const board = educationBoards.find(b => b.id === boardId);
    return board ? board.color : 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      {filteredSubjects.length > 0 ? (
        filteredSubjects.map((subject) => (
          <motion.div 
            key={subject.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* Subject header */}
            <button
              onClick={() => toggleSubject(subject.id)}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-center">
                <span className="text-3xl mr-4">{subject.icon}</span>
                <div>
                  <h2 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                    {subject.name}
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {subject.levels.map(level => (
                      <span key={level} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                        {level}
                      </span>
                    ))}
                    {subject.boards.map(board => (
                      <span key={board} className={`text-xs px-3 py-1 rounded-full ${getBoardColor(board)}`}>
                        {educationBoards.find(b => b.id === board)?.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-24 h-2 bg-gray-200 rounded-full mr-4">
                  <div 
                    className="h-2 bg-green-500 rounded-full" 
                    style={{ width: `${subject.popularity}%` }}
                  />
                </div>
                {expandedSubject === subject.id ? (
                  <FiChevronUp className="text-gray-500 text-xl" />
                ) : (
                  <FiChevronDown className="text-gray-500 text-xl" />
                )}
              </div>
            </button>

            {/* Subject expanded details */}
            <AnimatePresence>
              {expandedSubject === subject.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <div className="grid md:grid-cols-3 gap-8 pt-6 border-t border-gray-200">
                    {/* Books */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4 flex items-center text-gray-800">
                        <FiBook className="mr-2 text-indigo-600" />
                        Recommended Books
                      </h3>
                      <ul className="space-y-3">
                        {subject.resources.books.map((book, index) => (
                          <motion.li 
                            key={index}
                            whileHover={{ x: 5 }}
                            className="bg-gray-50 p-3 rounded-lg border-l-2 border-indigo-300"
                          >
                            <p className="font-medium">{book.title}</p>
                            <p className="text-sm text-gray-600">{book.publisher}</p>
                            <p className="text-xs text-gray-500 mt-1">ISBN: {book.isbn}</p>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Videos */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4 flex items-center text-gray-800">
                        <FiVideo className="mr-2 text-blue-600" />
                        Video Resources
                      </h3>
                      <div className="space-y-4">
                        {subject.resources.videos.map((video, index) => (
                          <motion.div 
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200"
                          >
                            <div className="relative aspect-video">
                              <iframe
                                className="w-full h-full"
                                src={video.url}
                                title={video.title}
                                allowFullScreen
                              />
                            </div>
                            <div className="p-3">
                              <p className="font-medium">{video.title}</p>
                              <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span className="flex items-center">
                                  <FiClock className="mr-1" /> {video.duration}
                                </span>
                                <span>{video.views} views</span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Past Papers */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4 flex items-center text-gray-800">
                        <FiDownload className="mr-2 text-green-600" />
                        Exam Resources
                      </h3>
                      <ul className="space-y-3">
                        {subject.resources.pastPapers.map((paper, index) => (
                          <motion.li 
                            key={index}
                            whileHover={{ x: 5 }}
                            className="flex items-start p-3 bg-gray-50 rounded-lg"
                          >
                            <span className={`text-xs px-2 py-1 rounded mr-3 mt-1 ${getBoardColor(paper.board)}`}>
                              {educationBoards.find(b => b.id === paper.board)?.name}
                            </span>
                            <div>
                              <p className="text-gray-800">{paper.title}</p>
                              <p className="text-xs text-gray-500">{paper.level} • {paper.year}</p>
                            </div>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white p-8 rounded-xl shadow-md text-center"
        >
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">No subjects found</h3>
          <p className="text-gray-600">
            Try adjusting your search filters or browse all subjects.
          </p>
          <button 
            onClick={() => {
              // Optional: use lifted props for resetting search
              window.location.reload(); // or pass reset function via props
            }}
            className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg transition-colors"
          >
            Reset Filters
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default SubjectsSection;
