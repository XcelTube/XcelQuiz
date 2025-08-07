import React from 'react';
import { useParams } from 'react-router-dom';

const EditQuizForm = () => {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800">✏️ Edit Quiz</h2>
      <p className="text-sm text-gray-500">Editing quiz with ID: {id}</p>
    </div>
  );
};

export default EditQuizForm;
