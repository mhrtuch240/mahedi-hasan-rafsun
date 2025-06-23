
import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'developer.mahedihasanrafsun@gmail.com',
      link: 'mailto:developer.mahedihasanrafsun@gmail.com'
    },
    {
      icon: '📱',
      label: 'WhatsApp',
      value: '+8801306654467',
      link: 'https://wa.me/8801306654467'
    },
    {
      icon: '💬',
      label: 'Telegram',
      value: '@mahedihasanrafsun',
      link: 'https://t.me/mahedihasanrafsun'
    },
    {
      icon: '🌐',
      label: 'Website',
      value: 'WebLearner Pro',
      link: 'https://weblearner.pro'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="section-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4 sm:mb-6">
                  Let's Work Together
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                  Ready to bring your ideas to life? I'm here to help you create amazing web experiences. 
                  Whether you need a new website, want to improve your existing one, or need help with 
                  AI prompt engineering, let's discuss your project!
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-portfolio-button transition-all duration-300 group"
                  >
                    <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm font-medium">{item.label}</p>
                      <p className="text-white text-sm sm:text-base font-semibold group-hover:text-portfolio-button transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-700">
                <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Quick Response Time</h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  I typically respond to emails within 24 hours and WhatsApp messages within a few hours during business days.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2 text-sm sm:text-base">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-portfolio-button focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2 text-sm sm:text-base">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-portfolio-button focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2 text-sm sm:text-base">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-portfolio-button focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                    placeholder="Project subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2 text-sm sm:text-base">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-portfolio-button focus:outline-none transition-colors duration-300 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-portfolio-button hover:bg-portfolio-button/80 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
