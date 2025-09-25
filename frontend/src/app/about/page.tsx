import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
            <h1 className="serif-font text-5xl md:text-6xl font-light mb-8 fade-in text-black">
              About Sculpt by U.K
            </h1>
            <div className="w-24 h-px bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed fade-in max-w-3xl mx-auto">
              Where beauty meets elegance. We specialize in enhancing your natural features through 
              expert aesthetic treatments and professional training programs.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="fade-in">
                <h2 className="serif-font text-4xl font-light mb-6 text-black">
                  Our Story
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Founded with a passion for enhancing natural beauty, Sculpt by U.K has established itself 
                  as a premier destination for aesthetic treatments in London. Our commitment to excellence 
                  and artistic vision sets us apart in the world of non-surgical cosmetic enhancements.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We believe that true beauty lies in enhancing what nature has given you. Our expert team 
                  combines advanced techniques with an artistic eye to deliver results that are both natural 
                  and transformative.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Through our comprehensive range of services and professional training programs, we continue 
                  to set new standards in the aesthetic industry, helping both clients and practitioners 
                  achieve their goals with confidence and expertise.
                </p>
              </div>
              
              <div className="relative fade-in">
                <div className="aspect-w-4 aspect-h-5 relative">
                  <div className="bg-gray-200 rounded-lg p-8 flex items-center justify-center h-96">
                    <p className="text-gray-500 text-center">Professional clinic environment and expert team showcase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="serif-font text-4xl font-light mb-6 text-black fade-in">
                Our Values
              </h2>
              <div className="w-24 h-px bg-black mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center fade-in">
                <div className="w-16 h-16 mx-auto mb-6 border border-black rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="serif-font text-xl font-medium mb-4 text-black">Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team brings years of experience and continuous education to deliver 
                  the highest standard of aesthetic treatments with precision and care.
                </p>
              </div>

              <div className="text-center fade-in">
                <div className="w-16 h-16 mx-auto mb-6 border border-black rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="serif-font text-xl font-medium mb-4 text-black">Natural Beauty</h3>
                <p className="text-gray-600 leading-relaxed">
                  We enhance your unique features rather than changing them, creating results 
                  that look natural and feel authentically you.
                </p>
              </div>

              <div className="text-center fade-in">
                <div className="w-16 h-16 mx-auto mb-6 border border-black rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="serif-font text-xl font-medium mb-4 text-black">Safety First</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your safety and comfort are our top priorities. We maintain the highest 
                  standards of hygiene and use only premium, FDA-approved products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
            <h2 className="serif-font text-3xl font-light mb-6 text-black">
              Begin Your Journey With Us
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Ready to discover what we can do for you? Schedule a consultation and let us 
              help you achieve your aesthetic goals with our expert care and attention.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="/appointment"
                className="btn-primary serif-font text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Book Consultation
              </a>
              <a
                href="/services"
                className="text-black hover:text-gray-600 transition-colors serif-font text-lg border-b border-transparent hover:border-gray-600 pb-1"
              >
                View Our Services
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;