
import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    
    // Create mailto link
    const mailtoLink = `mailto:developer.mahedihasanrafsun@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'developer.mahedihasanrafsun@gmail.com',
      link: 'mailto:developer.mahedihasanrafsun@gmail.com',
      icon: '📧'
    },
    {
      label: 'WhatsApp Business',
      value: '+8801306654467',
      link: 'https://wa.me/8801306654467',
      icon: '📱'
    },
    {
      label: 'Telegram',
      value: '@mahedihasanrafsun',
      link: 'https://t.me/mahedihasanrafsun',
      icon: '💬'
    },
    {
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      link: '#',
      icon: '📍'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="section-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Work Together</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ready to bring your project to life? I'm always excited to work on new challenges 
                and help businesses grow through innovative web solutions. Let's discuss your ideas!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.label} className="flex items-center group">
                    <div className="w-12 h-12 bg-portfolio-button/20 rounded-lg flex items-center justify-center text-xl mr-4 group-hover:bg-portfolio-button/30 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      {info.link === '#' ? (
                        <p className="text-white font-medium">{info.value}</p>
                      ) : (
                        <a 
                          href={info.link}
                          className="text-white font-medium hover:text-portfolio-button transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact Buttons */}
              <div className="flex gap-4 mt-8">
                <a
                  href="mailto:developer.mahedihasanrafsun@gmail.com"
                  className="flex items-center bg-portfolio-button hover:bg-portfolio-button/80 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </a>
                <a
                  href="https://wa.me/8801306654467"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-600 text-gray-300 hover:bg-gray-700 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-portfolio-button focus:outline-none text-white transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-portfolio-button focus:outline-none text-white transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-portfolio-button focus:outline-none text-white transition-colors duration-300"
                    placeholder="Project discussion"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-portfolio-button focus:outline-none text-white transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-portfolio-button hover:bg-portfolio-button/80 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
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
