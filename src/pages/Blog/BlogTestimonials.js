import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from './blogData';

const BlogTestimonials = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#0a0a1a] text-white relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative inline-block before:content-[''] before:absolute before:w-full before:h-[3px] before:bg-gradient-to-r before:from-cyan-400 before:to-pink-500 before:bottom-[-10px] before:left-0">
        💡 What Learners Say
      </h2>

      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="bg-white/10 p-8 rounded-xl shadow-lg text-center transition-all hover:rotate-[1deg] hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-cyan-400 shadow-md object-cover"
            />
            <p className="italic text-white/80 relative">
              <span className="text-cyan-400 text-2xl absolute -top-4 -left-4">“</span>
              {t.quote}
              <span className="text-cyan-400 text-2xl absolute -bottom-4 -right-4">”</span>
            </p>
            <p className="mt-6 font-bold text-cyan-300">{t.name}</p>
            <p className="text-xs text-white/60">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogTestimonials;
