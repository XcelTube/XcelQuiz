// src/pages/Blog/BlogCard.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogCard = ({ title, excerpt, slug }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-500 text-sm mb-4">{excerpt}</p>
      <Link
        to={`/blog/${slug}`}
        className="text-blue-600 font-medium hover:underline"
      >
        Read More →
      </Link>
    </motion.div>
  );
};

export default BlogCard;
