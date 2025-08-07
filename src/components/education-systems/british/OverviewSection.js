import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { FiAward } from 'react-icons/fi';

const OverviewSection = ({ educationBoards, subjectsData }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Education Structure Card */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
          <FaGraduationCap className="mr-3 text-blue-600" />
          UK Education Structure
        </h2>
        <div className="space-y-6">
          {[
            {
              title: "Key Stage 3 (Years 7–9)",
              description: "Core subjects with foundation knowledge building essential skills",
              icon: "🔍"
            },
            {
              title: "Key Stage 4 (Years 10–11)",
              description: "GCSEs or equivalent qualifications with subject specialization",
              icon: "📝"
            },
            {
              title: "Post-16 Education",
              description: "A-Levels, BTECs, T-Levels, or apprenticeships for career pathways",
              icon: "🎯"
            },
            {
              title: "Higher Education",
              description: "Undergraduate and postgraduate degrees at universities",
              icon: "🎓"
            }
          ].map((item, index) => (
            <motion.div key={index} whileHover={{ x: 5 }} className="flex items-start">
              <span className="text-2xl mr-4 mt-1">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Grading System Card */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-indigo-500"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
          <FiAward className="mr-3 text-indigo-600" />
          Grading Systems
        </h2>
        <div className="space-y-6">
          {[
            {
              title: "GCSE (9–1 Scale)",
              description: "9 (highest) to 1, with 4 considered a 'standard pass' and 5 a 'strong pass'",
              icon: "📊"
            },
            {
              title: "A-Level (A*–E)",
              description: "A* being the highest grade, E the minimum pass. A* introduced in 2010",
              icon: "🏆"
            },
            {
              title: "BTEC (Distinction–Pass)",
              description: "Distinction*, Distinction, Merit, Pass. Equivalent to A-Level grades",
              icon: "📈"
            },
            {
              title: "University Degree Classification",
              description: "First (1st), Upper Second (2:1), Lower Second (2:2), Third. With honours",
              icon: "🎖️"
            }
          ].map((item, index) => (
            <motion.div key={index} whileHover={{ x: 5 }} className="flex items-start">
              <span className="text-2xl mr-4 mt-1">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Exam Boards Overview */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="md:col-span-2 bg-white p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">UK Exam Boards</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {educationBoards.map((board) => (
            <motion.div
              key={board.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-lg ${board.color} flex items-center justify-center flex-col`}
            >
              <span className="text-lg font-medium">{board.name}</span>
              <span className="text-xs mt-1 opacity-80">
                {subjectsData.filter(s => s.boards.includes(board.id)).length} subjects
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OverviewSection;
