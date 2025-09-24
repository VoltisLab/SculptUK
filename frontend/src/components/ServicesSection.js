import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
    <section className="relative bg-black">
      {/* Services Header - positioned absolutely */}
      <div className="absolute left-8 lg:left-16 top-8 z-20">
        <h2 className="serif-font text-6xl md:text-7xl lg:text-8xl font-light text-white">
          Services
        </h2>
      </div>
      
      {/* Top right text overlay */}
      <div className="absolute top-8 right-8 lg:right-16 z-20 max-w-sm">
        <p className="text-gray-300 text-sm leading-relaxed">
          Secure your appointment with card protection for peace of mind. No-shows and cancellations are handled with ease.
        </p>
      </div>

      {/* Services Grid - full width */}
      <div className="pt-24 lg:pt-32">
        <div className="relative min-h-[600px]">
          {/* Large center image */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-80 lg:w-96 lg:h-96 z-10">
            <img 
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop&crop=face" 
              alt="Facial Treatment" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Facial Balancing - Left side */}
          <div className="absolute left-8 lg:left-16 top-32 lg:top-40 z-20">
            <h3 className="serif-font text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8">
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

          {/* Non-surgical enhancements - Right side */}
          <div className="absolute right-8 lg:right-16 top-32 lg:top-40 z-20 text-right">
            <h3 className="serif-font text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8">
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
        
        {/* Bottom border line */}
        <div className="mt-8 px-8 lg:px-16">
          <div className="w-full h-px bg-gray-800"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;