import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from './SplitText';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.feature-card');
    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);

  // Array of image paths or imports
  const featureImages = [
    '/public/aboutus2.png',
    '/public/aboutus1.png',
    '/public/aboutus3.jpg',
  ];

  return (
    <section id="about" ref={sectionRef} className="py-16 sm:py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <SplitText
            text="About Kat's Coffee"
            className="text-3xl sm:text-4xl md:text-5xl font-kalam font-bold text-emerald-700 mb-6 text-center"
            delay={60}
            duration={0.7}
            textAlign="center"
          />
          <div className="max-w-3xl mx-auto">
            <SplitText
              text="Kat's Coffee is a warm, female-run café nestled in the beautiful village of Talpe, in southern Sri Lanka. We’re passionate about serving locally sourced coffee, healthy food options, and creating a welcoming space for the community to come together.

Our bread, cakes, and snacks are lovingly prepared in-house, using only the freshest natural ingredients. Beyond our menu, we believe in empowering our community."
              className="text-base sm:text-lg md:text-xl font-poppins text-gray-600 leading-relaxed text-center"
              delay={30}
              duration={0.5}
              splitType="words"
              textAlign="center"
            />
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featureImages.map((imageSrc, index) => (
            <div
              key={index}
              className="feature-card bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100 flex items-center justify-center"
            >
              <img
                src={imageSrc}
                alt={`Feature ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
