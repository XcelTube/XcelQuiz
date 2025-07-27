import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Home from './pages/Home';
import QuizPage from './pages/QuizPage';
import QuizBuilderLayout from './pages/QuizBuilderLayout';

import Dashboard from './components/Builder/Management/Dashboard';
import QuizGrid from './components/Builder/Management/QuizGrid';
import CreateQuizForm from './components/Builder/Management/CreateQuizForm';
import EditQuizForm from './components/Builder/Management/EditQuizForm';
import QuizBuilder from './pages/QuizBuilder';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/quizbuilder" element={<QuizBuilder/>}/>

            <Route path ="/dashboard" element={<Dashboard />} />
            <Route path="quizzes" element={<QuizGrid />} />
            <Route path="create" element={<CreateQuizForm />} />
            <Route path="edit/:id" element={<EditQuizForm />} />
        
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;


