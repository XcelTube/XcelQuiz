import React from 'react';

// Blog Sections
import BlogHeader from './BlogHeader';
import BlogHero from './BlogHero';
import BlogIntro from './BlogIntro';
import BlogTrending from './BlogTrending';
import BlogCategories from './BlogCategories';
import BlogTimeline from './BlogTimeline';
import BlogVideos from './BlogVideos';
import BlogNewsletter from './BlogNewsletter';
import BlogTestimonials from './BlogTestimonials';
import BlogFooter from './BlogFooter';
import BlogChatbot from './BlogChatbot';

const Blog = () => {
  return (
    <div className="bg-[#0a0a1a] text-white">
      <BlogHeader />
      <BlogHero />
      <BlogIntro />
      <BlogTrending />
      <BlogCategories />
      <BlogTimeline />
      <BlogVideos />
      <BlogNewsletter />
      <BlogTestimonials />
      <BlogFooter />
      <BlogChatbot />
    </div>
  );
};

export default Blog;
