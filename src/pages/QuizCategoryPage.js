import { useParams } from 'react-router-dom';

const QuizCategoryPage = () => {
  const { category } = useParams();

  return (
    <div className="px-6 py-12">
      <h1 className="text-3xl font-bold capitalize mb-6">{category} Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Past Papers</h3>
          <p>Practice with solved past papers for {category}</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Subject-wise MCQs</h3>
          <p>Start focused MCQ tests by subject</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Daily Quiz</h3>
          <p>Test your skills with random timed quizzes</p>
        </div>
      </div>
    </div>
  );
};

export default QuizCategoryPage;
