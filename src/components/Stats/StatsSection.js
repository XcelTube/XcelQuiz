import React, { useEffect, useRef } from 'react';
import { Settings, Users, CheckCircle, Trophy } from 'lucide-react';

const StatCard = ({ icon, value, label, colorClass, delay }) => {
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            animateValue(parseInt(value.replace('+', '')), 2000);
            hasAnimated.current = true;
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  const animateValue = (target, duration) => {
    const start = 0;
    const startTime = performance.now();
    const element = counterRef.current;

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * (target - start) + start);
      
      if (element) {
        element.textContent = current.toLocaleString() + '+';
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  return (
    <div 
      className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
      style={{
        transitionDelay: `${delay}ms`,
        transform: 'translateY(20px)',
        opacity: 0,
        animation: 'fadeInUp 0.6s forwards',
        animationDelay: `${delay}ms`
      }}
    >
      <div className={`w-14 h-14 ${colorClass} rounded-lg flex items-center justify-center mb-6 mx-auto`}>
        {React.cloneElement(icon, { className: 'text-white w-6 h-6' })}
      </div>
      <div className="text-center">
        <div 
          ref={counterRef}
          className="text-4xl font-bold text-gray-900 h-16 flex items-center justify-center"
        >
          0+
        </div>
        <p className="text-gray-600 mt-2">{label}</p>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: <Settings />,
      value: '100000+',
      label: 'Quizzes Created',
      colorClass: 'bg-gradient-to-br from-purple-500 to-indigo-600'
    },
    {
      icon: <Users />,
      value: '50000+',
      label: 'Monthly Users',
      colorClass: 'bg-gradient-to-br from-blue-500 to-cyan-600'
    },
    {
      icon: <CheckCircle />,
      value: '1000000+',
      label: 'Questions Answered',
      colorClass: 'bg-gradient-to-br from-green-500 to-emerald-600'
    },
    {
      icon: <Trophy />,
      value: '10000+',
      label: 'Rewards Granted',
      colorClass: 'bg-gradient-to-br from-yellow-500 to-amber-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quantified Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real metrics driving educational transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              colorClass={stat.colorClass}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-white px-4 py-2 rounded-full border border-gray-200 shadow-xs">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
            <span className="text-sm text-gray-700">
              Trusted by institutions across 42 countries
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;