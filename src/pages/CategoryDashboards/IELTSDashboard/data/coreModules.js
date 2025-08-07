// coreModules.js

import { BookOpenCheck, Headphones, PenSquare, Mic } from 'lucide-react';

const coreModules = [
  {
    id: 'listening',
    title: 'Listening',
    description: 'Improve your ability to understand spoken English in academic and everyday settings.',
    icon: Headphones,
    color: 'from-blue-500 to-indigo-500',
    textColor: 'text-blue-600 dark:text-blue-400',
    features: [
      'Audio-based questions',
      'Accents from various countries',
      'Transcripts and explanations',
      'Mock listening exams',
    ],
    lessons: [
      { title: 'Understanding Conversations', duration: '6 min', completed: true },
      { title: 'Listening to Lectures', duration: '8 min', completed: false },
      { title: 'Common Trap Words', duration: '5 min', completed: false },
      { title: 'Practice Test: Section 1', duration: '10 min', completed: false },
      { title: 'Practice Test: Section 2', duration: '10 min', completed: false },
    ],
  },
  {
    id: 'reading',
    title: 'Reading',
    description: 'Develop reading skills with academic texts, skimming strategies, and time management.',
    icon: BookOpenCheck,
    color: 'from-green-500 to-emerald-500',
    textColor: 'text-green-600 dark:text-green-400',
    features: [
      'Reading passages from real tests',
      'Skimming and scanning techniques',
      'True/False/Not Given strategies',
      'Paraphrasing and synonyms',
    ],
    lessons: [
      { title: 'Skimming Techniques', duration: '7 min', completed: true },
      { title: 'Matching Headings', duration: '6 min', completed: false },
      { title: 'Identifying Details', duration: '8 min', completed: false },
      { title: 'Practice Test: Reading 1', duration: '12 min', completed: false },
    ],
  },
  {
    id: 'writing',
    title: 'Writing',
    description: 'Master IELTS Writing Task 1 and Task 2 with templates, vocab and feedback strategies.',
    icon: PenSquare,
    color: 'from-purple-500 to-pink-500',
    textColor: 'text-purple-600 dark:text-purple-400',
    features: [
      'Essay and report templates',
      'Grammar and cohesion tips',
      'Band 9 sample answers',
      'Feedback system',
    ],
    lessons: [
      { title: 'Writing Task 1: Reports', duration: '9 min', completed: false },
      { title: 'Writing Task 2: Essays', duration: '10 min', completed: false },
      { title: 'Using Connectors Effectively', duration: '5 min', completed: true },
      { title: 'Practice Task 1', duration: '10 min', completed: false },
    ],
  },
  {
    id: 'speaking',
    title: 'Speaking',
    description: 'Enhance your speaking fluency, coherence, and pronunciation through structured practice.',
    icon: Mic,
    color: 'from-red-500 to-yellow-500',
    textColor: 'text-red-600 dark:text-red-400',
    features: [
      'Cue card speaking practice',
      'Follow-up question prompts',
      'Pronunciation guides',
      'Peer review & AI feedback',
    ],
    lessons: [
      { title: 'Part 1: Intro Questions', duration: '6 min', completed: false },
      { title: 'Part 2: Cue Cards', duration: '7 min', completed: false },
      { title: 'Pronunciation Practice', duration: '8 min', completed: false },
      { title: 'Speaking Simulation', duration: '10 min', completed: false },
    ],
  },
];

export default coreModules;
