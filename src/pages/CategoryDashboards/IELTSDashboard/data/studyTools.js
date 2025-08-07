import { Brain, Target, Clock, FileText, Download, Zap } from 'lucide-react';

const studyTools = [
  { icon: Brain, title: 'Diagnostic Test', desc: 'Assess your current level', color: 'text-indigo-600 dark:text-indigo-400' },
  { icon: Target, title: 'Band Calculator', desc: 'Calculate your estimated band score', color: 'text-green-600 dark:text-green-400' },
  { icon: Clock, title: 'Timed Exams', desc: 'Practice under real test conditions', color: 'text-red-600 dark:text-red-400' },
  { icon: FileText, title: 'Study Plans', desc: 'Structured study paths', color: 'text-blue-600 dark:text-blue-400' },
  { icon: Download, title: 'PDF Resources', desc: 'Download handouts & exercises', color: 'text-purple-600 dark:text-purple-400' },
  { icon: Zap, title: 'Flashcards', desc: 'Interactive vocabulary decks', color: 'text-yellow-600 dark:text-yellow-400' }
];

export default studyTools;
