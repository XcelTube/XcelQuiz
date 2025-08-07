import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { trendingPosts } from './blogData';

const categories = ["All", "Coding", "Science", "Productivity", "Career Growth", "AI"];

const BlogCategories = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
    ? trendingPosts
    : trendingPosts.filter((post) =>
        post.categories?.includes(activeCategory)
      );

  return (
    <section className="py-20 px-6 md:px-12 bg-[#0a0a1a] text-white relative z-10">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full border text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
              activeCategory === category
                ? "bg-gradient-to-r from-cyan-400 to-pink-500 text-black border-none"
                : "border-white/20 text-white hover:bg-white/10"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Blog Grid (Filtered) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white/10 rounded-xl shadow-lg overflow-hidden hover:scale-[1.03] transform transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
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
          ))
        ) : (
          <p className="text-center text-white/60 col-span-full">No posts found in this category.</p>
        )}
      </div>
    </section>
  );
};

export default BlogCategories;
