// src/pages/Blog/posts/StudyTipsFromNeuroscience.js
import React from 'react';

const StudyTipsFromNeuroscience = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🧠 10 Study Tips Backed by Neuroscience</h1>
      <ol className="list-decimal ml-6 space-y-3 text-gray-700">
        <li>Study in short, focused bursts (Pomodoro technique).</li>
        <li>Use active recall — quiz yourself instead of rereading.</li>
        <li>Spaced repetition strengthens long-term memory.</li>
        <li>Teach someone else what you’ve learned.</li>
        <li>Visualize concepts — use mind maps & diagrams.</li>
        <li>Sleep well — memory consolidation happens during rest.</li>
        <li>Eliminate distractions to enter a flow state.</li>
        <li>Exercise increases brain plasticity.</li>
        <li>Mix up subjects to improve memory links.</li>
        <li>Use AI tools like XcelTube’s smart quizzes & analytics.</li>
      </ol>
      <p className="mt-6 text-gray-600">
        These tips aren't just smart — they’re science. Try combining multiple for best results.
      </p>
    </div>
  );
};

export default StudyTipsFromNeuroscience;
