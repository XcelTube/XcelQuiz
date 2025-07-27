import React from 'react';

const PanelSettings = () => {
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quiz Settings</h3>
      <div className="space-y-6">
        <div>
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-blue-600 mr-2" />
            <span className="text-gray-700">Shuffle questions</span>
          </label>
        </div>
        <div>
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-blue-600 mr-2" />
            <span className="text-gray-700">Show correct answers after submission</span>
          </label>
        </div>
        <div>
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-blue-600 mr-2" />
            <span className="text-gray-700">Allow multiple attempts</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PanelSettings;
