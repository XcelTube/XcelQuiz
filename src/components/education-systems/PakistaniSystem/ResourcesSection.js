import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiVideo, FiExternalLink } from 'react-icons/fi';

const ResourcesSection = ({ filteredBooks, filteredVideos }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Books Section */}
      <motion.div variants={fadeIn} className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
            <FiBook className="mr-2" />
            Recommended Books
          </h2>

          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredBooks.map((book, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-4">
                    <h3 className="font-medium text-gray-800 mb-1">{book.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {book.board}
                    </span>
                  </div>
                  <div className="px-4 py-2 bg-gray-50 flex justify-end">
                    <a
                      href={book.link}
                      className="text-green-600 text-sm font-medium flex items-center hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Details <FiExternalLink className="ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              No books found matching your search.
            </div>
          )}
        </div>
      </motion.div>

      {/* Videos Section */}
      <motion.div variants={fadeIn} className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
            <FiVideo className="mr-2" />
            Video Lectures
          </h2>

          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredVideos.map((video, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  className="rounded-lg overflow-hidden"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-black">
                    <iframe
                      src={video.link}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={video.title}
                    ></iframe>
                  </div>
                  <div className="p-3 bg-white">
                    <h3 className="font-medium text-gray-800">{video.title}</h3>
                    <p className="text-sm text-gray-600">
                      {video.channel} • {video.duration}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              No videos found matching your search.
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ResourcesSection;
