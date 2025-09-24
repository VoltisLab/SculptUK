import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
    <section className="relative bg-black min-h-screen py-16">
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

      {/* Services Grid Layout */}
      <div className="pt-32 lg:pt-40 px-8 lg:px-16">
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
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

        {/* Bottom Row - Three Column Layout for Treatments */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Image - Toxin treatments */}
          <div className="aspect-square overflow-hidden relative group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=center" 
              alt="Toxin treatments" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="serif-font text-2xl md:text-3xl font-light mb-4">
                Toxin<br />treatments
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

          {/* Center Content - treatments title and View All button */}
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="serif-font text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8">
              treatments
            </h2>
            <Link 
              to="/services"
              className="border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300"
            >
              View All
            </Link>
          </div>

          {/* Right Image */}
          <div className="aspect-square overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop&crop=center" 
              alt="Aesthetic Treatment" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
        
        {/* Bottom border line */}
        <div className="mt-16">
          <div className="w-full h-px bg-gray-800"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;