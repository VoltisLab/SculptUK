import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Facial Balancing',
      description: 'Advanced techniques to harmonize and enhance your natural facial features with precision and artistry.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop&crop=face',
      link: '/services'
    },
    {
      id: 2,
      title: 'Non-surgical enhancements',
      description: 'Revolutionary treatments that deliver exceptional results without invasive procedures or lengthy recovery times.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=face',
      link: '/services'
    },
    {
      id: 3,
      title: 'Skin Rejuvenation',
      description: 'Restore your skin\'s natural radiance with our advanced rejuvenation treatments and cutting-edge technology.',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop&crop=face',
      link: '/services'
    },
    {
      id: 4,
      title: 'Injectable Treatments',
      description: 'Expertly administered dermal fillers and neurotoxins to enhance and refine your natural beauty.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop&crop=face',
      link: '/services'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="serif-font text-4xl md:text-5xl font-light mb-4 fade-in">
            Services
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8 fade-in" style={{animationDelay: '0.2s'}}></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg fade-in" style={{animationDelay: '0.4s'}}>
            Secure your appointment with card protection for peace of mind. No-shows and cancellations are handled with ease.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="group relative overflow-hidden bg-gray-900/30 border border-gray-800 hover:border-gray-600 transition-all duration-500 fade-in"
              style={{animationDelay: `${0.2 * index}s`}}
            >
              {/* Service Image */}
              <div className="relative overflow-hidden h-80">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
              </div>

              {/* Service Content */}
              <div className="p-8">
                <h3 className="serif-font text-2xl md:text-3xl font-light mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  to={service.link}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;