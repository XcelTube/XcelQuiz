import React from 'react';
import { motion } from 'framer-motion';
import { trendingPosts } from './blogData';

const BlogTrending = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#0a0a1a] text-white relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative inline-block before:content-[''] before:absolute before:w-full before:h-[3px] before:bg-gradient-to-r before:from-red-500 before:to-orange-400 before:bottom-[-10px] before:left-0">
        🔥 Trending Now
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {trendingPosts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-white/10 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.03] hover:rotate-[1deg]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
                {post.title}
              </h3>
              <div className="flex justify-between text-sm text-white/60 mb-3">
                <span>👤 {post.author}</span>
                <span>⏱ {post.readTime}</span>
              </div>
              <p className="text-sm text-white/80 mb-4 line-clamp-3">{post.excerpt}</p>
              <a href={post.link} className="inline-block text-sm border border-cyan-400 text-cyan-400 px-4 py-1.5 rounded-full hover:bg-cyan-400 hover:text-black transition">
                Read More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogTrending;
