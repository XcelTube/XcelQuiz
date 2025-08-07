import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaLaptopCode, FaYoutube } from 'react-icons/fa';

const ResourcesSection = () => {
  const tools = [
    {
      icon: <FaBook className="text-3xl text-indigo-600" />,
      title: 'Books & Guides',
      desc: 'Hand-picked textbooks and prep books used in top U.S. schools and AP programs.',
      link: 'https://www.collegeboard.org/',
    },
    {
      icon: <FaLaptopCode className="text-3xl text-green-600" />,
      title: 'Online Platforms',
      desc: 'Explore trusted platforms like Khan Academy, edX, and Coursera to supplement learning.',
      link: 'https://www.khanacademy.org/',
    },
    {
      icon: <FaYoutube className="text-3xl text-red-500" />,
      title: 'Video Lectures',
      desc: 'Curated YouTube playlists and channels for AP prep, math tricks, and concept mastery.',
      link: 'https://www.youtube.com/user/crashcourse',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white p-6 md:p-10 rounded-xl shadow-md mb-10"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Additional Study Resources
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-6 text-center">
        Access high-quality learning tools and resources aligned with U.S. education standards and exams.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {tools.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 p-6 rounded-lg shadow border text-center"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline text-sm font-medium"
            >
              Explore →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ResourcesSection;
