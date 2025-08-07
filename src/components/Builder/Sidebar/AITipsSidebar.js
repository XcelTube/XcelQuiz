import React from 'react';
import { Lightbulb, BarChart3 } from 'lucide-react';

const AITipsSidebar = () => {
  return (
    <div className="w-80 p-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
          AI Generation Tips
        </h3>

        <div className="space-y-4">
          {/* Tip 1 */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <Lightbulb className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-blue-900 text-sm">Pro-Tip: AI Prompts</h4>
                <p className="text-blue-800 text-sm mt-1">
                  Be specific with your topic for best results (e.g., "History of Roman Empire, focusing on emperors").
                </p>
              </div>
            </div>
          </div>

          {/* Tip 2 */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <Lightbulb className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-green-900 text-sm">Review & Refine</h4>
                <p className="text-green-800 text-sm mt-1">
                  Always review AI-generated questions for accuracy and clarity before publishing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITipsSidebar;
