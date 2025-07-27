import React from 'react';
import QuizInfoForm from '../Forms/QuizInfoForm';
import AIQuestionGenerator from '../Forms/AIQuestionGenerator';

const PanelDetails = ({
  quizTitle,
  setQuizTitle,
  quizDescription,
  setQuizDescription,
  quizTopic,
  setQuizTopic,
  difficulty,
  setDifficulty,
  numQuestions,
  setNumQuestions,
  onGenerate
}) => {
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Quiz Details & AI Generation</h3>

      <div className="mb-8">
        <h4 className="text-md font-medium text-gray-900 mb-4">Quiz Information</h4>
        <QuizInfoForm
          quizTitle={quizTitle}
          setQuizTitle={setQuizTitle}
          quizDescription={quizDescription}
          setQuizDescription={setQuizDescription}
        />
      </div>

      <AIQuestionGenerator
        quizTopic={quizTopic}
        setQuizTopic={setQuizTopic}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        numQuestions={numQuestions}
        setNumQuestions={setNumQuestions}
        onGenerate={onGenerate}
      />
    </div>
  );
};

export default PanelDetails;
