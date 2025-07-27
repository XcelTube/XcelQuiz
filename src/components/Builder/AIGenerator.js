import React, { useState } from 'react';

const AIGenerator = () => {
  const [prompt, setPrompt] = useState('');

  const handleGenerate = () => {
    alert('🚀 AI would generate questions from:\n\n' + prompt);
    // Future: Connect to backend/LLM here
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 p-6 rounded-2xl mb-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-2xl">🤖</div>
        <div>
          <div className="font-semibold text-blue-800">AI Question Generator</div>
          <div className="text-sm text-gray-600">Generate questions automatically from your content</div>
        </div>
      </div>

      <textarea
        className="w-full p-4 rounded-xl border-2 border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition min-h-[80px] text-sm"
        placeholder="Describe your topic or paste content here. AI will generate relevant questions..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>

      <div className="flex flex-wrap gap-3 mt-4">
        <button
          onClick={handleGenerate}
          className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
        >
          ✨ Generate Questions
        </button>
        <button className="bg-blue-100 text-blue-700 border border-blue-300 px-5 py-2 rounded-xl font-medium hover:bg-blue-200 transition">
          📝 From Document
        </button>
        <button className="bg-blue-100 text-blue-700 border border-blue-300 px-5 py-2 rounded-xl font-medium hover:bg-blue-200 transition">
          🎥 From Video URL
        </button>
      </div>
    </div>
  );
};

export default AIGenerator;


