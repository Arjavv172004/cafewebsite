import React from 'react';
import { Coffee, Instagram, Facebook, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-700 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo and Description */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Coffee className="h-6 sm:h-8 w-6 sm:w-8 text-emerald-300" />
              <span className="font-kalam font-bold text-xl sm:text-2xl">Kat's Coffee</span>
            </div>
            <p className="font-poppins text-emerald-100 leading-relaxed text-sm sm:text-base">
              Your cozy tropical cafe hideaway, serving handcrafted beverages with love and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-kalam font-bold text-lg sm:text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 font-poppins">
              {['Home', 'About', 'Specials', 'Location', 'Contact'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-emerald-100 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="font-kalam font-bold text-lg sm:text-xl mb-4">Connect With Us</h3>
            <div className="space-y-2 font-poppins text-emerald-100 mb-4 text-sm sm:text-base">
              <p>Bakmegahawatta</p>
              <p>36/1 Temple Road</p>
              <p>Talpe 80615</p>
              <p>076 023 8495</p>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              {[
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-emerald-300 hover:text-white transition-colors duration-200 transform hover:scale-110"
                >
                  <social.icon className="h-5 sm:h-6 w-5 sm:w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-600 pt-6 sm:pt-8 text-center">
          <p className="font-poppins text-emerald-100 flex items-center justify-center space-x-1 text-sm sm:text-base">
            <span>Made with</span>
            <Heart className="h-3 sm:h-4 w-3 sm:w-4 text-red-400" />
            <span>by Kat's Coffee Team © 2024</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;