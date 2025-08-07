import React from 'react';
import Navbar from '../components/Header/Navbar';
import HeroSection from '../components/Hero/HeroSection';
import CategorySelectorSection from '../components/Category/CategorySelectorSection';
import EducationSystemsPreview from '../components/education-systems/EducationSystemsPreview'; // Updated
import StatsSection from '../components/Stats/StatsSection';
import HowItWorksSection from '../components/HowItWorks/HowItWorksSection';
import FeaturesSection from '../components/Features/FeaturesSection';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <HeroSection />
      <CategorySelectorSection />
      <EducationSystemsPreview /> {/* Section updated */}
      <StatsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Home;
