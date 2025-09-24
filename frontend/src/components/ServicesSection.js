import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      title: 'Facial Balancing',
      description: 'Advanced techniques to harmonize and enhance your natural facial features with precision and artistry.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop&crop=face',
      features: ['Dermal Fillers', 'Cheek Enhancement', 'Jawline Contouring', 'Lip Enhancement']
    },
    {
      title: 'Non-Surgical Enhancements',
      description: 'Revolutionary treatments that deliver exceptional results without invasive procedures or lengthy recovery times.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center',
      features: ['Thread Lifts', 'Skin Boosters', 'Anti-Wrinkle Injections', 'Profile Enhancement']
    },
    {
      title: 'Toxin Treatments',
      description: 'Expertly administered neurotoxin treatments for facial rejuvenation and natural-looking results.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop&crop=center',
      features: ['Forehead Lines', 'Crow\'s Feet', 'Frown Lines', 'Facial Slimming']
    },
    {
      title: 'Skin Rejuvenation',
      description: 'Restore your skin\'s natural radiance with advanced treatments and cutting-edge technology.',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop&crop=center',
      features: ['Chemical Peels', 'Microneedling', 'PRP Therapy', 'Laser Treatments']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="serif-font text-5xl md:text-6xl lg:text-7xl font-light text-black mb-6">
            Our Services
          </h2>
          <div className="w-24 h-px bg-black mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Secure your appointment with card protection for peace of mind. No-shows and cancellations are handled with ease.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-500 fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Service Image */}
              <div className="relative overflow-hidden h-64 lg:h-72">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="serif-font text-2xl lg:text-3xl font-light text-white mb-2">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6 lg:p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link 
                  to="/services"
                  className="inline-flex items-center text-black hover:text-gray-600 transition-colors group font-medium"
                >
                  <span className="mr-2">Book Now</span>
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-lg p-8 lg:p-12">
          <h3 className="serif-font text-3xl lg:text-4xl font-light text-black mb-4">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Book a consultation to discuss your aesthetic goals and discover the perfect treatment plan for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services"
              className="btn-primary serif-font text-lg px-8 py-3"
            >
              View All Services
            </Link>
            <Link 
              to="/appointment"
              className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors duration-300 serif-font text-lg"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;