import React from 'react';
import { motion } from 'framer-motion';
import { timelinePosts } from './blogData';

const BlogTimeline = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#0a0a1a] text-white relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative inline-block before:content-[''] before:absolute before:w-full before:h-[3px] before:bg-gradient-to-r before:from-cyan-400 before:to-pink-500 before:bottom-[-10px] before:left-0">
        📡 Fresh from the Lab
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* vertical line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-pink-500 rounded-full opacity-30"></div>

        {timelinePosts.map((post, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`relative w-full md:w-1/2 px-4 py-6 ${isLeft ? 'md:pr-10 md:ml-0' : 'md:pl-10 md:ml-auto'} z-10`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Date Bubble */}
              <span className={`absolute text-xs font-bold px-4 py-1 bg-[#0a0a1a] text-cyan-400 rounded-full shadow border border-cyan-400 z-10 ${isLeft ? 'left-full ml-6' : 'right-full mr-6'}`}>
                {post.date}
              </span>

              {/* Card Content */}
              <div className="bg-white/10 rounded-xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
                <img src={post.image} alt={post.title} className="rounded-md h-48 w-full object-cover mb-4 blur-sm hover:blur-0 transition duration-300" />
                <div className="flex gap-4 text-xs text-white/60 mb-2">
                  <span>👁 {post.views}</span>
                  <span>💬 {post.comments}</span>
                  <span>⏱ {post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">{post.title}</h3>
                <p className="text-sm text-white/80 mb-4">{post.excerpt}</p>
                <a href={post.link} className="inline-block text-sm border border-cyan-400 text-cyan-400 px-4 py-1.5 rounded-full hover:bg-cyan-400 hover:text-black transition">
                  Read More →
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default BlogTimeline;
