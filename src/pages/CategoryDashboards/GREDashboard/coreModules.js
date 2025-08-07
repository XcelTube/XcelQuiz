// src/pages/CategoryDashboards/GREDashboard/coreModules.js

import { FiBook, FiAward, FiClock, FiTrendingUp, FiCalendar, FiBarChart2, FiUsers, FiMessageSquare } from 'react-icons/fi';

export const user = {
  name: "Alex Johnson",
  targetScore: 330,
  currentScores: {
    verbal: 155,
    quant: 160
  },
  streak: 7,
  hoursStudied: 42,
  progress: 65
};

export const modules = [
  {
    title: "Verbal Reasoning",
    icon: <FiBook />,
    features: [
      "Text Completion/Sentence Equivalence",
      "Reading Comprehension",
      "Vocabulary Builder",
      "RC Passage Strategies"
    ],
    progress: 45
  },
  {
    title: "Quantitative Reasoning",
    icon: <FiTrendingUp />,
    features: [
      "Arithmetic & Algebra",
      "Geometry & Data Analysis",
      "Problem Solving",
      "Quant Comparison"
    ],
    progress: 60
  },
  {
    title: "Analytical Writing",
    icon: <FiMessageSquare />,
    features: [
      "Analyze an Issue",
      "Analyze an Argument",
      "Essay Templates",
      "AI Writing Evaluation"
    ],
    progress: 30
  }
];

export const studyPlan = [
  { day: "Monday", tasks: ["Vocab Flashcards", "Quant Practice Set"] },
  { day: "Tuesday", tasks: ["RC Passages", "AWA Essay Practice"] },
  { day: "Wednesday", tasks: ["Full Verbal Section", "Error Review"] },
  { day: "Thursday", tasks: ["Geometry Problems", "Data Analysis"] },
  { day: "Friday", tasks: ["Mock Test", "Weak Area Focus"] },
  { day: "Saturday", tasks: ["Vocab Quiz", "Quant Timed Practice"] },
  { day: "Sunday", tasks: ["Rest Day", "Review Notes"] }
];


