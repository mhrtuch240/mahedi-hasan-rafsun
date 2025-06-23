
import React from 'react';

const AboutSection = () => {
  const skills = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 92 },
    { name: 'JavaScript', level: 88 },
    { name: 'React.js', level: 85 },
    { name: 'Prompt Engineering', level: 90 },
    { name: 'SEO', level: 87 }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="section-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-white">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4 sm:mb-6">
                Passionate Developer & <span className="gradient-text">Entrepreneur</span>
              </h3>
              
              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>
                  At just 18 years old, I've already made my mark in the web development world with over 
                  2 years of hands-on experience. As the founder of <strong className="text-portfolio-button">WebLearner Pro</strong>, 
                  I'm passionate about creating educational content and helping others learn technical skills.
                </p>
                
                <p>
                  My expertise spans across modern web technologies including HTML5, CSS3, JavaScript, 
                  and React.js. I specialize in creating responsive, user-friendly websites and have 
                  recently expanded into AI prompt engineering and SEO optimization.
                </p>
                
                <p>
                  When I'm not coding, I enjoy freelancing, content creation, and translation work. 
                  I believe in continuous learning and staying updated with the latest industry trends 
                  to deliver cutting-edge solutions.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="bg-portfolio-button/20 text-portfolio-button px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Web Developer
                </span>
                <span className="bg-portfolio-button/20 text-portfolio-button px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Freelancer
                </span>
                <span className="bg-portfolio-button/20 text-portfolio-button px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Entrepreneur
                </span>
                <span className="bg-portfolio-button/20 text-portfolio-button px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Content Creator
                </span>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h4 className="text-xl sm:text-2xl font-semibold text-white mb-6">
                Technical Skills
              </h4>
              
              <div className="space-y-4 sm:space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium text-sm sm:text-base">{skill.name}</span>
                      <span className="text-portfolio-button font-semibold text-sm sm:text-base">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3">
                      <div 
                        className="bg-gradient-to-r from-portfolio-button to-portfolio-primary h-2 sm:h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
