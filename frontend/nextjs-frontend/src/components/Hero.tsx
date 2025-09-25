import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="serif-font text-6xl md:text-7xl lg:text-8xl font-light mb-8 text-black fade-in">
            Sculpt by U.K
          </h1>
          <div className="w-32 h-px bg-black mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-6 fade-in">
            Where beauty meets elegance
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12 fade-in">
            Specialising in full facial enhancements without the need for surgery. 
            Our expert techniques deliver natural, sophisticated results that enhance your unique beauty.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in">
            <Link 
              href="/appointment"
              className="btn-primary serif-font text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Book Consultation
            </Link>
            <Link 
              href="/gallery"
              className="text-black hover:text-gray-600 transition-colors serif-font text-lg border-b border-transparent hover:border-gray-600 pb-1"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;