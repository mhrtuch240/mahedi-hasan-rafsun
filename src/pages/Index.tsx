
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ResumeSection from '../components/ResumeSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { initScrollReveal } from '../utils/scrollReveal';

const Index = () => {
  useEffect(() => {
    // Initialize scroll reveal animations
    const observer = initScrollReveal();
    
    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ResumeSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
