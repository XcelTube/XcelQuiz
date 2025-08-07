import React from 'react';
import { motion } from 'framer-motion';
import { videoPosts } from './blogData';

const BlogVideos = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#0a0a1a] text-white relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative inline-block before:content-[''] before:absolute before:w-full before:h-[3px] before:bg-gradient-to-r before:from-cyan-400 before:to-pink-500 before:bottom-[-10px] before:left-0">
        🎬 Watch & Learn
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {videoPosts.map((video, index) => (
          <motion.div
            key={index}
            className="relative bg-white/10 rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Thumbnail */}
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />

            {/* Play Button */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyan-400/70 hover:bg-cyan-400 w-14 h-14 rounded-full flex justify-center items-center transition-all shadow-lg">
              <i className="fas fa-play text-[#0a0a1a] text-xl ml-1"></i>
            </div>

            {/* Video Info */}
            <div className="p-4 bg-white/5">
              <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-1">{video.title}</h3>
              <div className="text-xs text-white/60 flex justify-between">
                <span>⏱ {video.duration}</span>
                <span>👁 {video.views}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogVideos;
