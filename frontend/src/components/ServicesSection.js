import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
    <section className="py-0 bg-black">
      {/* Services Header */}
      <div className="relative">
        <div className="absolute left-8 lg:left-16 top-8 z-10">
          <h2 className="serif-font text-6xl md:text-7xl lg:text-8xl font-light text-white">
            Services
          </h2>
        </div>
        
        {/* Services Grid */}
        <div className="pt-32 lg:pt-24">
          {/* Top text overlay */}
          <div className="absolute top-20 right-8 lg:right-16 z-10 max-w-sm">
            <p className="text-gray-300 text-sm leading-relaxed">
              Secure your appointment with card protection for peace of mind. No-shows and cancellations are handled with ease.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 lg:px-16">
            {/* Facial Balancing */}
            <div className="relative group cursor-pointer">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop&crop=face" 
                  alt="Facial Balancing" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Text Overlay */}
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="serif-font text-3xl md:text-4xl lg:text-5xl font-light mb-4">
                  Facial<br />Balancing
                </h3>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-white hover:text-gray-300 transition-colors group"
                >
                  <span className="mr-2 font-light tracking-wide">Book Now</span>
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Non-surgical enhancements */}
            <div className="relative group cursor-pointer">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=600&fit=crop&crop=center" 
                  alt="Non-surgical enhancements" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Text Overlay */}
              <div className="absolute bottom-8 right-8 text-white text-right">
                <h3 className="serif-font text-3xl md:text-4xl lg:text-5xl font-light mb-4">
                  Non-surgical<br />enhancements
                </h3>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-white hover:text-gray-300 transition-colors group"
                >
                  <span className="mr-2 font-light tracking-wide">Book Now</span>
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Bottom border line */}
          <div className="mt-8 px-8 lg:px-16">
            <div className="w-full h-px bg-gray-800"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;