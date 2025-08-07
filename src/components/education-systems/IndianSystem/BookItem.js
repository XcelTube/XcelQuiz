import React from 'react';

const BookItem = ({ title, description }) => {
  return (
    <li className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start space-x-3">
        <div className="text-xl">📗</div>
        <div>
          <h4 className="font-semibold text-gray-800">{title}</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </li>
  );
};

export default BookItem;
