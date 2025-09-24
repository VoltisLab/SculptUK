import React from 'react';

const AcademySection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=500&h=600&fit=crop&crop=center" 
                alt="Training at The Formé Academy" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="serif-font text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              The Formé Academy
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Elevating the next generation of practitioners with accredited, hands-on training.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-white font-medium mb-2">• Foundation Training</h3>
                <p className="text-gray-400 text-sm leading-relaxed pl-4">
                  Designed for complete beginners with no injecting experience. This course covers theory, facial anatomy, health & safety, injection techniques, and practical skills on live models.
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-medium mb-2">• Advanced Techniques</h3>
                <p className="text-gray-400 text-sm leading-relaxed pl-4">
                  For experienced practitioners looking to enhance their skills with advanced injection patterns and aesthetic concepts.
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-medium mb-2">• Business Development</h3>
                <p className="text-gray-400 text-sm leading-relaxed pl-4">
                  Learn how to build and grow your aesthetic practice with proven strategies and marketing techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademySection;