// src/pages/Blog/BlogPostGrid.js
import React from 'react';
import BlogCard from './BlogCard';
import blogData from './blogData';

const BlogPostGrid = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogData.map((post, idx) => (
        <BlogCard key={idx} title={post.title} excerpt={post.excerpt} slug={post.id} />
      ))}
    </div>
  );
};

export default BlogPostGrid;
