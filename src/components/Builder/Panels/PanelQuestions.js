import React from 'react';
import { FileText } from 'lucide-react';

const PanelQuestions = () => {
  return (
    <div className="p-6 text-center text-gray-500">
      <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
      <p>No questions created yet. Use the AI generator or create manually.</p>
    </div>
  );
};

export default PanelQuestions;
