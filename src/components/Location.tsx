import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Clock, Phone } from 'lucide-react';
import SplitText from './SplitText';

gsap.registerPlugin(ScrollTrigger);

const Location: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    tl.fromTo(mapRef.current, 
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(infoRef.current, 
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );
  }, []);

  return (
    <section id="location" ref={sectionRef} className="py-16 sm:py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <SplitText
            text="Find Your Paradise"
            className="text-3xl sm:text-4xl md:text-5xl font-kalam font-bold text-emerald-700 mb-6 text-center"
            delay={60}
            duration={0.7}
            textAlign="center"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Map */}
          <div ref={mapRef} className="relative order-2 lg:order-1">
  <div className="bg-emerald-100 rounded-3xl p-0 h-80 sm:h-96 overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.9796249573706!2d80.28334067523681!3d5.997533893987574!2m3!1f0!2f0!3f0!2m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae172f22e2ae3bd%3A0xc1a65569739915b4!2sKat&#39;s%20Coffee!5e0!3m2!1sen!2slk!4v1750524153242!5m2!1sen!2slk"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

          {/* Info */}
          <div ref={infoRef} className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 sm:h-6 w-5 sm:w-6 text-emerald-500 mr-3" />
                <h3 className="text-lg sm:text-xl font-kalam font-bold text-gray-800">Address</h3>
              </div>
              <p className="text-gray-600 font-poppins text-sm sm:text-base">
                123 Tropical Paradise Lane<br />
                Coffee Island, CI 12345
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="h-5 sm:h-6 w-5 sm:w-6 text-emerald-500 mr-3" />
                <h3 className="text-lg sm:text-xl font-kalam font-bold text-gray-800">Hours</h3>
              </div>
              <div className="text-gray-600 font-poppins text-sm sm:text-base space-y-1">
                <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                <p>Saturday: 7:00 AM - 9:00 PM</p>
                <p>Sunday: 7:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Phone className="h-5 sm:h-6 w-5 sm:w-6 text-emerald-500 mr-3" />
                <h3 className="text-lg sm:text-xl font-kalam font-bold text-gray-800">Contact</h3>
              </div>
              <p className="text-gray-600 font-poppins text-sm sm:text-base">
                Phone: (555) 123-KATS<br />
                Email: hello@katscoffee.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;