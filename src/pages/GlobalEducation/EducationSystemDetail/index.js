// src/pages/EducationSystemDetail/index.js
import React from 'react';
import { useParams } from 'react-router-dom';

const EducationSystemDetail = () => {
  const { systemId } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Education System: {systemId}
        </h1>

        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-gray-600">
            This page will contain detailed information about the {systemId} education system.
          </p>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Video Lectures</h2>
            {/* Placeholder */}
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Recommended Books</h2>
            {/* Placeholder */}
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Exam Preparation</h2>
            {/* Placeholder */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSystemDetail;
