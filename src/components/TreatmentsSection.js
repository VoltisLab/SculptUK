import React from 'react';

const TreatmentsSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="px-8 lg:px-16">
        {/* Treatments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Image */}
          <div className="aspect-square overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=center" 
              alt="Botox Treatment" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Content */}
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="serif-font text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8">
              treatments
            </h2>
            <button className="border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300">
              View All
            </button>
          </div>

          {/* Right Image */}
          <div className="aspect-square overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop&crop=center" 
              alt="Aesthetic Treatment" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;