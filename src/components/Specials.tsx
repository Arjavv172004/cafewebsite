import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from './SplitText';

gsap.registerPlugin(ScrollTrigger);

const Specials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.special-card');

    if (cards) {
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, rotationY: -15 },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );

        // Hover animations
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
      });
    }
  }, []);

  const specials = [
    {
      name: "Tropical Paradise Latte",
      description: "Coconut milk, mango syrup, and our signature espresso blend topped with toasted coconut flakes",
      image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "from-orange-400 to-yellow-400"
    },
    {
      name: "Kat's Special Lime Soda",
      description: "A refreshing, fizzy drink bursting with tangy lime and a hint of sweetness.",
      image: "/limesoda.png",
      color: "from-emerald-400 to-teal-400"
    },
    {
      name: "Iced Coffee",
      description: "Chilled, bold coffee served over ice, perfect for a cool caffeine boost.",
      image: "/icedcoffee.png",
      color: "from-yellow-400 to-orange-400"
    },
    {
      name: "Corn & Cheese Quesadilla",
      description: "A warm, crispy tortilla stuffed with melted cheese and tasty fillings.",
      image: "/food.png",
      color: "from-pink-400 to-rose-400"
    }
  ];

  return (
    <section id="specials" ref={sectionRef} className="py-16 sm:py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <SplitText
            text="Our Tropical Specials"
            className="text-3xl sm:text-4xl md:text-5xl font-kalam font-bold text-emerald-700 mb-6 text-center"
            delay={60}
            duration={0.7}
            textAlign="center"
          />
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {specials.map((special, index) => (
            <div
              key={index}
              className="special-card bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden"> {/* increased height */}
                <img
                  src={special.image}
                  alt={special.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${special.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-kalam font-bold text-gray-800 mb-2">
                  {special.name}
                </h3>
                <p className="text-gray-600 font-poppins text-sm leading-relaxed">
                  {special.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
