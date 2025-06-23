
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = 'I am a Web Developer | Freelancer | Programmer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        index = 0;
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const handleDownloadCV = () => {
    // Create a temporary link to download CV
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual CV file path
    link.download = 'Mahedi_Hasan_Rafsun_CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-portfolio-primary via-portfolio-secondary to-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 section-fade-in">
              Hi, I'm <span className="gradient-text">Mahedi Hasan Rafsun</span>
            </h1>
            
            <div className="h-12 sm:h-16 mb-6 sm:mb-8 section-fade-in">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 gradient-text font-semibold">
                {text}<span className="animate-pulse">|</span>
              </p>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed section-fade-in max-w-2xl mx-auto lg:mx-0">
              18-year-old passionate developer with 2+ years of experience in web development, 
              specializing in modern technologies and AI-driven solutions. Founder of WebLearner Pro.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start section-fade-in">
              <button 
                onClick={handleDownloadCV}
                className="bg-portfolio-button hover:bg-portfolio-button/80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                Download Resume
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0 order-1 lg:order-2 section-fade-in">
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img 
                  src="/lovable-uploads/3f32ed92-0f2f-400f-94fa-a778f472f70e.png" 
                  alt="Mahedi Hasan Rafsun"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-portfolio-button to-portfolio-primary rounded-full blur opacity-75 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
