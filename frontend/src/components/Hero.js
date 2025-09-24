import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-center px-6">
      <div className="w-full max-w-none">
        <h1 className="serif-font text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-light leading-tight mb-8 fade-in">
          <span className="block">Luxury Aesthetics.</span>
          <span className="block mt-2">Exceptional Results.</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed fade-in" style={{animationDelay: '0.3s'}}>
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
    </section>
  );
};

export default Hero;