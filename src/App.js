// src/App.js
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import '@fortawesome/fontawesome-free/css/all.min.css';


// Auth Pages
import Login from './pages/Login';
import Signup from './pages/Signup';

// Core Pages
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';
import QuizCategoryPage from './pages/QuizCategoryPage';
import StudentQuiz from './pages/StudentQuiz';

// Quiz Builder (Instructor/Admin)
import QuizBuilder from './pages/XcelQuiz/QuizBuilder';
import Dashboard from './components/Builder/Management/Dashboard';
import QuizGrid from './components/Builder/Management/QuizGrid';
import CreateQuizForm from './components/Builder/Management/CreateQuizForm';
import EditQuizForm from './components/Builder/Management/EditQuizForm';

// Category Dashboards
import EntryTestDashboard from './pages/CategoryDashboards/EntryTestDashboard/EntryTestDashboard';
import CSSDashboard from './pages/CategoryDashboards/CSSDashboard/CSSDashboard';
import IELTSDashboard from './pages/CategoryDashboards/IELTSDashboard/IELTSDashboard';
import GREDashboard from './pages/CategoryDashboards/GREDashboard/GREDashboard';
import GeneralKnowledgeDashboard from './pages/CategoryDashboards/GeneralKnowledgeDashboard';

// ✅ Global Education Systems (Correct paths)
import EducationSystems from './pages/EducationSystems';
import BritishSystem from './pages/GlobalEducation/EducationSystemDetail/BritishSystem';
import AmericanSystem from './pages/GlobalEducation/EducationSystemDetail/AmericanSystem';
import PakistaniSystem from './pages/GlobalEducation/EducationSystemDetail/PakistaniSystem';
import IndianSystem from './pages/GlobalEducation/EducationSystemDetail/IndianSystem';



// Blog Pages
import Blog from './pages/Blog/Blog';
import FutureOfEdTech from './pages/Blog/posts/FutureOfEdTech';
import HowAIBoostsLearning from './pages/Blog/posts/HowAIBoostsLearning';
import StudyTipsFromNeuroscience from './pages/Blog/posts/StudyTipsFromNeuroscience';
import WhyLearn2EarnWorks from './pages/Blog/posts/WhyLearn2EarnWorks';

// Query Client for React Query
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>

          {/* 🔓 Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* 🧠 Student Quiz Routes */}
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/quiz/:quizId" element={<StudentQuiz />} />
          <Route path="/quiz-category/:category" element={<QuizCategoryPage />} />

          {/* 📊 Category Dashboards */}
          <Route path="/quiz-category/entrytest" element={<EntryTestDashboard />} />
          <Route path="/quiz-category/css" element={<CSSDashboard />} />
          <Route path="/quiz-category/ielts" element={<IELTSDashboard />} />
          <Route path="/quiz-category/gre" element={<GREDashboard />} />
          <Route path="/quiz-category/generalknowledge" element={<GeneralKnowledgeDashboard />} />

          {/* 🛠️ Quiz Builder Admin Panel */}
          <Route path="/quizbuilder" element={<QuizBuilder />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/quizzes" element={<QuizGrid />} />
          <Route path="/dashboard/create" element={<CreateQuizForm />} />
          <Route path="/dashboard/edit/:id" element={<EditQuizForm />} />

          {/* 🌍 Global Education Systems */}
          <Route path="/education-systems" element={<EducationSystems />} />
          <Route path="/education-systems/british" element={<BritishSystem />} />
          <Route path="/education-systems/american" element={<AmericanSystem />} />
          <Route path="/education-systems/pakistani" element={<PakistaniSystem />} />
          <Route path="/education-systems/indian" element={<IndianSystem />} />

          {/* 📝 XcelTube Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/posts/future-of-edtech" element={<FutureOfEdTech />} />
          <Route path="/posts/how-ai-boosts-learning" element={<HowAIBoostsLearning />} />
          <Route path="/posts/study-tips-from-neuroscience" element={<StudyTipsFromNeuroscience />} />
          <Route path="/posts/why-learn2earn-works" element={<WhyLearn2EarnWorks />} />

        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;


