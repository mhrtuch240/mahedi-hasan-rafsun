
import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'WebLearner Pro Platform',
      description: 'Educational platform helping learners grasp technical topics through structured tutorials and content.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'SEO'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500',
      category: 'Web Development'
    },
    {
      title: 'AI Prompt Engineering Tools',
      description: 'Custom AI prompt generation tools for optimizing ChatGPT and other AI model outputs.',
      technologies: ['JavaScript', 'AI', 'Prompt Engineering'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500',
      category: 'AI Tools'
    },
    {
      title: 'SEO-Optimized Business Websites',
      description: 'Collection of responsive business websites with advanced SEO optimization and fast loading times.',
      technologies: ['React', 'CSS3', 'SEO', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
      category: 'Web Development'
    },
    {
      title: 'Content Management System',
      description: 'Custom CMS for managing educational content, blog posts, and multimedia resources.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Database'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500',
      category: 'Full Stack'
    },
    {
      title: 'Translation & Localization Platform',
      description: 'Platform for content translation and localization services with quality assurance features.',
      technologies: ['JavaScript', 'Translation APIs', 'UI/UX'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500',
      category: 'Web App'
    },
    {
      title: 'Portfolio & Landing Pages',
      description: 'Collection of modern, responsive portfolio and landing pages for various clients.',
      technologies: ['React', 'Tailwind CSS', 'Animation'],
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500',
      category: 'Frontend'
    }
  ];

  const categories = ['All', 'Web Development', 'AI Tools', 'Full Stack', 'Frontend', 'Web App'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="section-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            My <span className="gradient-text">Projects</span>
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-portfolio-button text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden card-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-portfolio-button text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-portfolio-button transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-portfolio-button hover:bg-portfolio-button/80 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300">
                      View Project
                    </button>
                    <button className="flex-1 border border-gray-600 text-gray-300 hover:bg-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300">
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">
              Interested in working together? Let's create something amazing!
            </p>
            <button className="bg-portfolio-button hover:bg-portfolio-button/80 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
