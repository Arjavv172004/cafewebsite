import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, CheckCircle } from 'lucide-react';
import SplitText from './SplitText';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    gsap.fromTo(formRef.current, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-16 sm:py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <SplitText
            text="Get in Touch"
            className="text-3xl sm:text-4xl md:text-5xl font-kalam font-bold text-emerald-700 mb-6 text-center"
            delay={60}
            duration={0.7}
            textAlign="center"
          />
          
          <SplitText
            text="We'd love to hear from you! Share your thoughts or ask us anything."
            className="text-base sm:text-lg md:text-xl font-poppins text-gray-600 text-center"
            delay={40}
            duration={0.5}
            splitType="words"
            textAlign="center"
          />
        </div>

        <div ref={formRef} className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-poppins font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 font-poppins text-sm sm:text-base"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-poppins font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 font-poppins text-sm sm:text-base"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-poppins font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 font-poppins resize-none text-sm sm:text-base"
                  placeholder="Tell us what's on your mind..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-poppins font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 mx-auto"
                >
                  <Send className="h-4 sm:h-5 w-4 sm:w-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 sm:py-12">
              <CheckCircle className="h-12 sm:h-16 w-12 sm:w-16 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-kalam font-bold text-emerald-700 mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-600 font-poppins text-sm sm:text-base">
                Thank you for reaching out. We'll get back to you soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;