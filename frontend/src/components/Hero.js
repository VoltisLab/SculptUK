import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="serif-font text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 fade-in">
          <span className="block">Luxury Aesthetics.</span>
          <span className="block mt-4">Exceptional Results.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed fade-in" style={{animationDelay: '0.3s'}}>
          Welcome to The Forme Clinique, where beauty meets elegance. We specialise in full facial enhancements without the need for surgery. Our team of specialists will guide and advise you on every step of your journey.
        </p>
        
        <Link 
          to="/appointment" 
          className="btn-primary serif-font text-lg fade-in"
          style={{animationDelay: '0.6s'}}
        >
          Book an appointment
        </Link>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-1 h-32 bg-gradient-to-b from-white to-transparent opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-1 h-32 bg-gradient-to-t from-white to-transparent opacity-20"></div>
    </section>
  );
};

export default Hero;