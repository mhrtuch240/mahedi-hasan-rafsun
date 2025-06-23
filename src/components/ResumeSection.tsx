
import React from 'react';

const ResumeSection = () => {
  const experience = [
    {
      title: 'Founder & Lead Developer',
      company: 'WebLearner Pro',
      period: '2023 - Present',
      description: 'Founded and developed an educational platform helping learners grasp technical topics. Built comprehensive tutorials and content management systems.',
      technologies: ['React', 'JavaScript', 'HTML/CSS', 'SEO']
    },
    {
      title: 'Freelance Web Developer',
      company: 'Various Clients',
      period: '2022 - Present',
      description: 'Delivered custom web solutions for clients worldwide. Specialized in responsive design, performance optimization, and modern UI/UX.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js']
    },
    {
      title: 'Prompt Engineer',
      company: 'AI Projects',
      period: '2023 - Present',
      description: 'Specialized in crafting effective prompts for AI models including ChatGPT and Claude. Optimized AI outputs for content generation and automation.',
      technologies: ['AI', 'ChatGPT', 'Prompt Engineering', 'Content Strategy']
    }
  ];

  const education = [
    {
      degree: 'Self-Taught Developer',
      institution: 'Online Learning Platforms',
      period: '2022 - Present',
      description: 'Continuously learning through various online platforms, documentation, and hands-on projects.',
      subjects: ['Web Development', 'JavaScript', 'React.js', 'Modern CSS']
    }
  ];

  const achievements = [
    '2+ Years of Web Development Experience',
    'Founded WebLearner Pro Educational Platform',
    'Successfully Completed 50+ Client Projects',
    'Expert in Modern Web Technologies',
    'Specialized in AI Prompt Engineering',
    'SEO & Performance Optimization Expert'
  ];

  return (
    <section id="resume" className="py-16 sm:py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="section-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-white">
            My <span className="gradient-text">Resume</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6 sm:mb-8 flex items-center">
                <span className="w-2 h-8 bg-portfolio-button rounded mr-3"></span>
                Experience
              </h3>
              
              <div className="space-y-6 sm:space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-700 card-hover">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4">
                      <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-white">{exp.title}</h4>
                        <p className="text-portfolio-button font-medium text-sm sm:text-base">{exp.company}</p>
                      </div>
                      <span className="text-gray-400 text-xs sm:text-sm font-medium mt-1 sm:mt-0 bg-gray-800 px-2 sm:px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-portfolio-button/20 text-portfolio-button px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Achievements */}
            <div className="space-y-8 sm:space-y-12">
              {/* Education */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6 sm:mb-8 flex items-center">
                  <span className="w-2 h-8 bg-portfolio-button rounded mr-3"></span>
                  Education
                </h3>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-700 card-hover">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4">
                        <div>
                          <h4 className="text-lg sm:text-xl font-semibold text-white">{edu.degree}</h4>
                          <p className="text-portfolio-button font-medium text-sm sm:text-base">{edu.institution}</p>
                        </div>
                        <span className="text-gray-400 text-xs sm:text-sm font-medium mt-1 sm:mt-0 bg-gray-800 px-2 sm:px-3 py-1 rounded-full">
                          {edu.period}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                        {edu.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject, idx) => (
                          <span key={idx} className="bg-portfolio-button/20 text-portfolio-button px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6 sm:mb-8 flex items-center">
                  <span className="w-2 h-8 bg-portfolio-button rounded mr-3"></span>
                  Achievements
                </h3>
                
                <div className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-700">
                  <ul className="space-y-3 sm:space-y-4">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start text-gray-300 text-sm sm:text-base">
                        <span className="w-2 h-2 bg-portfolio-button rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Download CV Button */}
          <div className="text-center mt-12">
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = '#';
                link.download = 'Mahedi_Hasan_Rafsun_CV.pdf';
                link.click();
              }}
              className="bg-portfolio-button hover:bg-portfolio-button/80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              Download Full CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
