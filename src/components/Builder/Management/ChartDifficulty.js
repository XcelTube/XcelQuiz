import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const ChartDifficulty = ({ data }) => {
  // Expected data format: [{ _id: 'Easy', count: 3 }, ...]
  const formattedData = data.map(item => ({
    difficulty: item._id,
    count: item.count,
  }));

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-2">Difficulty Distribution</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="difficulty" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" fill="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartDifficulty;
