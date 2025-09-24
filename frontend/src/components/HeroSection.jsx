import React from 'react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl lg:text-7xl font-serif text-gray-900 mb-8 leading-tight">
            <span className="block">Luxury Aesthetics.</span>
            <span className="block">Exceptional Results.</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Welcome to The Forme Clinique, where beauty meets elegance. We specialise in full facial enhancements without the need for surgery. Our team of specialists will guide and advise you on every step of your journey.
          </p>

          <Button 
            size="lg"
            className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            Book an appointment
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;