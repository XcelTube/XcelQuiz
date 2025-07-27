import React from 'react';

const PanelRewards = () => {
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Rewards & Publishing</h3>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">XCEL Reward Amount</label>
          <input
            type="number"
            defaultValue={5}
            className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors">
          Publish Quiz
        </button>
      </div>
    </div>
  );
};

export default PanelRewards;
