import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h1 className="serif-font text-5xl md:text-6xl font-light mb-8 fade-in">
              About The Forme Clinique
            </h1>
            <div className="w-24 h-px bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 leading-relaxed fade-in">
              Where artistry meets science in the pursuit of aesthetic excellence.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="slide-in-left">
                <h2 className="serif-font text-4xl font-light mb-6">Our Story</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Founded with a vision to redefine aesthetic medicine, The Forme Clinique represents the pinnacle of non-surgical enhancement. Our journey began with a simple belief: true beauty enhancement should be an art form that celebrates individuality while achieving harmonious results.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We specialize in facial balancing techniques that work with your natural features, creating subtle yet transformative results. Our approach combines cutting-edge technology with artistic expertise to deliver outcomes that exceed expectations.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Every treatment is tailored to the unique anatomy and aesthetic goals of our clients, ensuring results that are not only beautiful but authentically you.
                </p>
              </div>
              <div className="slide-in-right">
                <img 
                  src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=600&h=400&fit=crop&crop=center" 
                  alt="Clinic interior" 
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="serif-font text-4xl font-light mb-4">Our Values</h2>
              <div className="w-24 h-px bg-white mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center fade-in">
                <div className="w-16 h-16 mx-auto mb-6 border border-white rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="serif-font text-xl font-medium mb-4">Excellence</h3>
                <p className="text-gray-300 leading-relaxed">
                  We pursue perfection in every treatment, using only the finest techniques and premium products.
                </p>
              </div>
              
              <div className="text-center fade-in" style={{animationDelay: '0.2s'}}>
                <div className="w-16 h-16 mx-auto mb-6 border border-white rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="serif-font text-xl font-medium mb-4">Artistry</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every enhancement is approached as a work of art, crafted with precision and aesthetic vision.
                </p>
              </div>
              
              <div className="text-center fade-in" style={{animationDelay: '0.4s'}}>
                <div className="w-16 h-16 mx-auto mb-6 border border-white rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="serif-font text-xl font-medium mb-4">Trust</h3>
                <p className="text-gray-300 leading-relaxed">
                  Your confidence and safety are paramount. We build lasting relationships based on trust and results.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;