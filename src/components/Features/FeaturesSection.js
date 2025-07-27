import React from 'react';
import { Settings, TrendingUp, Puzzle, Share2, Shield, Rocket } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Settings className="w-6 h-6 text-blue-600" />,
      title: 'Gamified Learning Experience',
      desc: 'Engage with fun, interactive quizzes and rewarding challenges, designed to keep you motivated and learning.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      title: 'Advanced Performance Analytics',
      desc: 'Gain insights into your learning patterns and progress with comprehensive, easy-to-understand reports.'
    },
    {
      icon: <Puzzle className="w-6 h-6 text-blue-600" />,
      title: 'Intuitive Quiz Customization',
      desc: 'Create personalized quizzes with various question types, media integration, and flexible settings.'
    },
    {
      icon: <Share2 className="w-6 h-6 text-blue-600" />,
      title: 'Collaborative & Sharing Tools',
      desc: 'Share your quizzes with friends, students, or colleagues and foster a collaborative learning environment.'
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: 'Secure & Reliable Platform',
      desc: 'Your data and quiz content are protected with industry-leading security measures, ensuring a safe experience.'
    },
    {
      icon: <Rocket className="w-6 h-6 text-blue-600" />,
      title: 'Continuous Feature Enhancements',
      desc: 'Benefit from regular updates and new features that evolve with your learning and teaching needs.'
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Unleash Your Potential with Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
