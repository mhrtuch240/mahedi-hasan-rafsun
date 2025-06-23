
import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ['Web Developer', 'Freelancer', 'Programmer'];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentText = `I am a ${texts[textIndex]}`;
    
    if (currentIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText('');
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, textIndex, texts]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-portfolio-primary to-portfolio-secondary overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-white/5 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src="/lovable-uploads/3f32ed92-0f2f-400f-94fa-a778f472f70e.png"
                alt="Mahedi Hasan Rafsun"
                className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-white/20 animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-portfolio-primary/20 to-portfolio-button/20"></div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white animate-fade-in-left">
            Mahedi Hasan <span className="gradient-text">Rafsun</span>
          </h1>

          {/* Typing Animation */}
          <div className="h-16 mb-8 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-white/90 font-light">
              {displayText}
              <span className="animate-blink border-r-2 border-white ml-1"></span>
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in-right">
            Passionate web developer and prompt engineer with 2+ years of experience creating innovative digital solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <button 
              onClick={() => window.open('#', '_blank')}
              className="bg-portfolio-button hover:bg-portfolio-button/80 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Download Resume
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
            <ArrowDown className="w-8 h-8 text-white/60 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
