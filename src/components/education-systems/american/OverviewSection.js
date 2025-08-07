import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';

const OverviewSection = () => {
  const highlights = [
    {
      icon: <FaUniversity className="text-3xl text-indigo-600" />,
      title: 'Comprehensive Curriculum',
      desc: 'From English to STEM to electives — explore grade-specific courses aligned with U.S. standards.',
    },
    {
      icon: <FaUserGraduate className="text-3xl text-blue-600" />,
      title: 'College Readiness',
      desc: 'Resources for SAT, ACT, AP courses, and application guidance for U.S. universities.',
    },
    {
      icon: <FaChalkboardTeacher className="text-3xl text-green-600" />,
      title: 'Certified Resources',
      desc: 'Curated videos, books, and online tools from College Board, Khan Academy, and more.',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-6 md:p-10 rounded-xl shadow-md mb-8"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Overview of U.S. Education System
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-center">
        The American K-12 education system is divided into grade levels from 1 to 12, typically culminating with standardized tests and college admissions prep. Curriculum varies by state but follows national frameworks such as Common Core or NextGen Science Standards.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 text-center"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default OverviewSection;
