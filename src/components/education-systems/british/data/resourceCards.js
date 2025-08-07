import { FiBookOpen, FiVideo, FiAward, FiLayers } from 'react-icons/fi';
import { FaGraduationCap, FaRegLightbulb } from 'react-icons/fa';

const resourceCards = [
  {
    title: "Textbook Finder",
    description: "Search for recommended textbooks by exam board and subject with ISBN details.",
    icon: <FiBookOpen className="text-3xl" />,
    color: "bg-indigo-100 text-indigo-600",
    buttonColor: "bg-indigo-600 hover:bg-indigo-700",
    action: "Browse Textbooks"
  },
  {
    title: "Video Library",
    description: "Curated video lessons from top educators with duration and popularity metrics.",
    icon: <FiVideo className="text-3xl" />,
    color: "bg-blue-100 text-blue-600",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    action: "Explore Videos"
  },
  {
    title: "Revision Tools",
    description: "Interactive flashcards, quizzes, and mind maps for effective revision.",
    icon: <FaRegLightbulb className="text-3xl" />,
    color: "bg-green-100 text-green-600",
    buttonColor: "bg-green-600 hover:bg-green-700",
    action: "Access Tools"
  },
  {
    title: "Exam Techniques",
    description: "Master the art of exam writing with our proven strategies and templates.",
    icon: <FiAward className="text-3xl" />,
    color: "bg-purple-100 text-purple-600",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
    action: "Learn Techniques"
  },
  {
    title: "Subject Roadmaps",
    description: "Structured learning paths with milestones for comprehensive understanding.",
    icon: <FiLayers className="text-3xl" />,
    color: "bg-yellow-100 text-yellow-600",
    buttonColor: "bg-yellow-600 hover:bg-yellow-700",
    action: "View Roadmaps"
  },
  {
    title: "University Prep",
    description: "UCAS application guides, personal statement examples, and interview prep.",
    icon: <FaGraduationCap className="text-3xl" />,
    color: "bg-red-100 text-red-600",
    buttonColor: "bg-red-600 hover:bg-red-700",
    action: "Prepare for Uni"
  }
];

export default resourceCards;
