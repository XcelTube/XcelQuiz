import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const ExamsSection = ({ examTimetables, educationBoards, subjectsData }) => {
  const getBoardColor = (boardId) => {
    const board = educationBoards.find(b => b.id === boardId);
    return board ? board.color : 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-8">
      {/* Exam Timetables */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Exam Timetables 2024</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exam Board</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qualification</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Range</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subjects</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {examTimetables.map((exam, index) => (
                <motion.tr
                  key={index}
                  whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`flex-shrink-0 h-4 w-4 rounded-full ${getBoardColor(exam.board).split(' ')[0]} mr-2`} />
                      <span className="font-medium text-gray-900">
                        {educationBoards.find(b => b.id === exam.board)?.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {exam.qualification}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{exam.startDate}</div>
                    <div className="text-sm text-gray-500">to {exam.endDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {exam.subjects} subjects
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a href={exam.link} className="text-indigo-600 hover:text-indigo-900 mr-4">
                      Download
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Calendar
                    </a>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Additional sections like Past Papers & Mark Schemes could go here if needed */}
    </div>
  );
};

export default ExamsSection;
