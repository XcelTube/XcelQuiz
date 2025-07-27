import React from 'react';

const testimonials = [
  {
    quote:
      "XcelQuiz transformed how my students engage with homework. It's incredibly intuitive, and the analytics help me pinpoint where they need extra support.",
    name: 'Sarah Chen',
    role: 'High School Teacher',
    color: 'bg-red-500',
    initial: 'S'
  },
  {
    quote:
      "As a student, XcelQuiz makes studying enjoyable. Earning badges and seeing my progress motivates me to learn more every day.",
    name: 'David Lee',
    role: 'University Student',
    color: 'bg-blue-500',
    initial: 'D'
  },
  {
    quote:
      "Building quizzes is a breeze! I use XcelQuiz for corporate training, and it helps us effectively assess our team's understanding of complex topics.",
    name: 'Maria Garcia',
    role: 'Training Manager',
    color: 'bg-pink-500',
    initial: 'M'
  },
  {
    quote:
      "The 'How It Works' section is fantastic, guiding new users step-by-step. The platform is designed with great user experience in mind.",
    name: 'Emily White',
    role: 'UI/UX Designer',
    color: 'bg-green-500',
    initial: 'E'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 text-sm mb-4 italic">"{t.quote}"</p>
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center`}>
                  <span className="text-white text-sm font-semibold">{t.initial}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
