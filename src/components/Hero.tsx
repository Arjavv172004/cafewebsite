import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitText from './SplitText';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate the cafe illustration
    if (imageRef.current) {
      tl.fromTo(imageRef.current, 
        { opacity: 0, scale: 0.8, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );
    }

    // Floating animation for the illustration
    gsap.to(imageRef.current, {
      y: -10,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50 flex items-center justify-center relative overflow-hidden pt-20 md:pt-16">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-200/30 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-200/30 rounded-full blur-lg"></div>

      <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <SplitText
              text="Kat's Coffee"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-kalam font-bold text-emerald-700 leading-tight"
              delay={80}
              duration={0.8}
              from={{ opacity: 0, y: 60, rotationX: -90 }}
              to={{ opacity: 1, y: 0, rotationX: 0 }}
            />
            
            <SplitText
              text="Your cozy tropical cafe hideaway"
              className="text-lg sm:text-xl md:text-2xl font-poppins text-gray-600 max-w-lg mx-auto lg:mx-0"
              delay={50}
              duration={0.6}
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
            />

            <div className="pt-4">
              <button 
                onClick={() => document.getElementById('specials')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-poppins font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Explore Our Menu
              </button>
            </div>
          </div>

          {/* Cafe Illustration */}
          <div ref={imageRef} className="flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <img 
                src="/image.png" 
                alt="Kat's Coffee Cafe Illustration" 
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 to-orange-400/20 rounded-3xl blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;