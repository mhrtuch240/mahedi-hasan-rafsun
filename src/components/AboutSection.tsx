
import React from 'react';

const AboutSection = () => {
  const skills = [
    'HTML/CSS', 'JavaScript', 'React.js', 'TypeScript', 
    'Prompt Engineering', 'SEO', 'Content Creation', 'Translation'
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative">
      <div className="container mx-auto px-6">
        <div className="section-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Hi, I'm Mahedi Hasan Rafsun
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I am a passionate and self-taught web developer, prompt engineer, and content creator. 
                I specialize in HTML, CSS, JavaScript, and SEO. With hands-on experience building 
                websites and AI-based tools, I am confident in delivering fast, efficient, and 
                creative digital solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                As the founder of <span className="text-portfolio-button font-semibold">WebLearner Pro</span>, 
                I help learners easily grasp technical topics through simple and structured tutorials. 
                My content has significantly boosted organic traffic and helped learners across 
                various platforms.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="text-portfolio-button font-semibold">Age</h4>
                  <p className="text-white">18 years</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="text-portfolio-button font-semibold">Experience</h4>
                  <p className="text-white">2+ years</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="text-portfolio-button font-semibold">Location</h4>
                  <p className="text-white">Dhaka, Bangladesh</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="text-portfolio-button font-semibold">Projects</h4>
                  <p className="text-white">10+ websites</p>
                </div>
              </div>
            </div>

            {/* Right Content - Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Skills & Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={skill}
                    className="bg-gradient-to-r from-portfolio-primary to-portfolio-button p-4 rounded-lg text-white font-medium text-center card-hover"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">What I Do</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-portfolio-button rounded-full mr-3"></span>
                    Responsive Website Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-portfolio-button rounded-full mr-3"></span>
                    AI Prompt Engineering
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-portfolio-button rounded-full mr-3"></span>
                    SEO Optimization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-portfolio-button rounded-full mr-3"></span>
                    Content Creation & Translation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
