
import React from 'react';

const ResumeSection = () => {
  const workExperience = [
    {
      title: 'Freelance Web Developer & Prompt Writer',
      period: '2024 - Present',
      description: 'Freelance web developer skilled in HTML, CSS, JavaScript, and prompt writing. I deliver responsive websites and AI-friendly prompts quickly, ensuring client satisfaction through clear communication and effective solutions.',
    },
    {
      title: 'Content & SEO Specialist — WebLearner Pro',
      period: '2023 - 2024',
      description: 'At WebLearner Pro, I am responsible for writing educational content, optimizing websites for SEO, and managing content across platforms like blogs, YouTube, and Telegram. My content has significantly boosted organic traffic and helped learners easily grasp technical topics through simple and structured tutorials.',
    },
    {
      title: 'Team Collaboration & Communication',
      period: '2024 - Still now',
      description: 'Experienced in collaborative environments, I communicate effectively with team members, share responsibilities, and contribute ideas to achieve project goals, ensuring smooth workflow, mutual support, and successful outcomes.',
    }
  ];

  const education = [
    {
      degree: 'English Spoken and Skill',
      institution: 'ONLINE PLATFORM',
      period: 'Still running',
    },
    {
      degree: 'SSC school certificate',
      institution: 'BUHS HIGH SCHOOL',
      period: '2023 - 2025',
    },
    {
      degree: 'PSC school certificate',
      institution: 'BUGPS PRIMARY SCHOOL',
      period: '2018 - 2019',
    }
  ];

  const achievements = [
    'Built 10+ responsive websites using HTML, CSS & JS',
    'Recognized for prompt engineering skills in AI prompt writing tasks',
    'Boosted organic traffic through effective SEO strategies',
    'Founded WebLearner Pro educational platform'
  ];

  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="section-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            My <span className="gradient-text">Resume</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <span className="w-8 h-8 bg-portfolio-button rounded-full flex items-center justify-center text-white text-sm mr-3">💼</span>
                Work Experience
              </h3>
              <div className="space-y-8">
                {workExperience.map((job, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-portfolio-button/30">
                    <div className="absolute w-4 h-4 bg-portfolio-button rounded-full -left-2 top-0"></div>
                    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 card-hover">
                      <span className="text-portfolio-button text-sm font-medium">{job.period}</span>
                      <h4 className="text-xl font-semibold text-white mt-1 mb-3">{job.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{job.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Achievements */}
            <div>
              {/* Education */}
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <span className="w-8 h-8 bg-portfolio-button rounded-full flex items-center justify-center text-white text-sm mr-3">🎓</span>
                Education
              </h3>
              <div className="space-y-6 mb-12">
                {education.map((edu, index) => (
                  <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 card-hover">
                    <span className="text-portfolio-button text-sm font-medium">{edu.period}</span>
                    <h4 className="text-lg font-semibold text-white mt-1">{edu.degree}</h4>
                    <p className="text-gray-300">{edu.institution}</p>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <span className="w-8 h-8 bg-portfolio-button rounded-full flex items-center justify-center text-white text-sm mr-3">🏆</span>
                Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start bg-gray-800/50 p-4 rounded-lg border border-gray-700 card-hover">
                    <span className="w-2 h-2 bg-portfolio-button rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <p className="text-gray-300">{achievement}</p>
                  </div>
                ))}
              </div>

              {/* Download Resume Button */}
              <div className="mt-8 text-center">
                <button className="bg-portfolio-button hover:bg-portfolio-button/80 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Download Full Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
