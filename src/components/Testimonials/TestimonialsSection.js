import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    quote: "XcelQuiz transformed how my students engage with homework. It's incredibly intuitive, and the analytics help me pinpoint where they need extra support.",
    name: 'Sarah Chen',
    role: 'High School Teacher',
    color: 'from-red-400 to-red-600',
    initial: 'S',
    rating: 5
  },
  {
    quote: "As a student, XcelQuiz makes studying enjoyable. Earning badges and seeing my progress motivates me to learn more every day.",
    name: 'David Lee',
    role: 'University Student',
    color: 'from-blue-400 to-blue-600',
    initial: 'D',
    rating: 5
  },
  {
    quote: "Building quizzes is a breeze! I use XcelQuiz for corporate training, and it helps us effectively assess our team's understanding of complex topics.",
    name: 'Maria Garcia',
    role: 'Training Manager',
    color: 'from-pink-400 to-pink-600',
    initial: 'M',
    rating: 4
  },
  {
    quote: "The 'How It Works' section is fantastic, guiding new users step-by-step. The platform is designed with great user experience in mind.",
    name: 'Emily White',
    role: 'UI/UX Designer',
    color: 'from-green-400 to-green-600',
    initial: 'E',
    rating: 5
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex mb-3">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-blue-600">Educators & Learners</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands who are transforming education with XcelQuiz
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 relative overflow-hidden"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${t.color}`}></div>
              
              <StarRating rating={t.rating} />
              
              <p className="text-gray-700 text-sm mb-6 relative">
                <span className="absolute -top-4 -left-2 text-6xl text-gray-100 font-serif">"</span>
                {t.quote}
                <span className="absolute -bottom-4 -right-2 text-6xl text-gray-100 font-serif">"</span>
              </p>
              
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center shadow-md`}>
                  <span className="text-white text-lg font-semibold">{t.initial}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-8 text-gray-500 text-sm">
            <span>500,000+ Active Users</span>
            <span>•</span>
            <span>4.9/5 Average Rating</span>
            <span>•</span>
            <span>Trusted by 1,200+ Schools</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

