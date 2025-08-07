import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { BookOpen, Globe, GraduationCap, TestTube2, Languages } from 'lucide-react';
import { useEffect, useRef } from 'react';

const CategorySelectorSection = () => {
  const navigate = useNavigate();
  const starsRef = useRef(null);

  const categories = [
    { 
      name: 'EntryTest', 
      icon: <GraduationCap className="w-5 h-5" />, 
      color: 'from-blue-500 to-blue-700' 
    },
    { 
      name: 'CSS', 
      icon: <BookOpen className="w-5 h-5" />, 
      color: 'from-orange-500 to-orange-600' 
    },
    { 
      name: 'IELTS', 
      icon: <Languages className="w-5 h-5" />, 
      color: 'from-blue-600 to-blue-800' 
    },
    { 
      name: 'GRE', 
      icon: <TestTube2 className="w-5 h-5" />, 
      color: 'from-red-500 to-red-600' 
    },
    { 
      name: 'General', 
      icon: <Globe className="w-5 h-5" />, 
      color: 'from-blue-400 to-blue-600' 
    }
  ];

  const handleCategorySelect = (category) => {
    navigate(`/quiz-category/${category.toLowerCase()}`);
  };

  // Smooth star animation with framer motion
  const Star = ({ size, left, top, duration, delay }) => {
    const opacity = useMotionValue(0.2);
    const scale = useMotionValue(1);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    useEffect(() => {
      const sequence = async () => {
        while (true) {
          await animate(opacity, 1, { duration: duration/2, delay });
          await animate(opacity, 0.2, { duration: duration/2 });
          await animate(x, Math.random() * 10 - 5, { duration: duration });
          await animate(y, Math.random() * 10 - 5, { duration: duration });
        }
      };
      sequence();
    }, []);

    return (
      <motion.div
        className="absolute rounded-full bg-white"
        style={{
          width: size,
          height: size,
          left,
          top,
          opacity,
          scale,
          x,
          y
        }}
      />
    );
  };

  const renderStars = () => {
    return Array.from({ length: 50 }).map((_, i) => {
      const size = `${Math.random() * 2 + 1}px`;
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const duration = Math.random() * 5 + 5;
      const delay = Math.random() * 5;

      return (
        <Star
          key={i}
          size={size}
          left={left}
          top={top}
          duration={duration}
          delay={delay}
        />
      );
    });
  };

  return (
    <section className="relative overflow-hidden py-20 px-6 text-center rounded-xl h-[600px]">
      {/* Cosmic Background */}
      <div 
        ref={starsRef}
        className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-gray-900 to-black"
      >
        {renderStars()}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="text-4xl font-bold mb-6 text-white"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Choose Your Challenge
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              delay: 0.3,
              duration: 0.8,
              ease: "easeOut"
            }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Select a category to begin your learning journey
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.5
                }
              }
            }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 10
                    }
                  }
                }}
                whileHover={{ 
                  y: -5,
                  scale: 1.05,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
                }}
                whileTap={{ 
                  scale: 0.98,
                  boxShadow: '0 5px 15px -5px rgba(0, 0, 0, 0.2)'
                }}
                onClick={() => handleCategorySelect(category.name)}
                className={`px-6 py-4 rounded-lg flex items-center space-x-3 bg-gradient-to-br ${category.color} text-white font-medium shadow-md transition-all duration-300 min-w-[180px] hover:shadow-lg`}
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="p-2 rounded-full bg-white/20 backdrop-blur-sm"
                >
                  {category.icon}
                </motion.div>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySelectorSection;


