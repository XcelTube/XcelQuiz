import React from 'react';
import { FiVideo, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const VideosSection = ({ videos, searchQuery }) => {
  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.channel.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold text-orange-800 mb-6 flex items-center">
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
                  <p className="text-sm text-gray-600">{video.channel} • {video.duration}</p>
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
  );
};

export default VideosSection;
