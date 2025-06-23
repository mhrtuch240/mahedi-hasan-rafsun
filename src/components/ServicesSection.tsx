
import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom responsive websites using modern technologies like React, HTML5, CSS3, and JavaScript.',
      features: ['Responsive Design', 'Modern UI/UX', 'Fast Loading', 'SEO Optimized'],
      icon: '🌐'
    },
    {
      title: 'Prompt Engineering',
      description: 'Expert AI prompt crafting for ChatGPT, Claude, and other AI models to maximize output quality.',
      features: ['Custom Prompts', 'AI Optimization', 'Content Generation', 'Workflow Automation'],
      icon: '🤖'
    },
    {
      title: 'SEO Services',
      description: 'Comprehensive SEO strategies to boost your website\'s visibility and organic traffic.',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Content Strategy'],
      icon: '📈'
    },
    {
      title: 'Content Creation',
      description: 'High-quality content creation and translation services for blogs, websites, and social media.',
      features: ['Blog Writing', 'Translation', 'Social Media', 'Technical Writing'],
      icon: '✍️'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="section-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            My <span className="gradient-text">Services</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 card-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 bg-portfolio-button rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-gray-600">
                  <button className="text-portfolio-button hover:text-portfolio-button/80 font-medium text-sm transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
