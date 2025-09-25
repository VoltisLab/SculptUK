import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Facial Balancing',
      description: 'Achieve perfect harmony with our signature facial balancing techniques using advanced dermal fillers.',
      image: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/ihloolf0_SnapInsta.to_551071066_17881781061389543_540253133835019875_n%20%281%29.jpg',
      link: '/services'
    },
    {
      id: 2,
      title: 'Lip Enhancement',
      description: 'Create naturally beautiful lips with our expert lip filler techniques and signature methods.',
      image: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/ab6099j8_SnapInsta.to_551485792_17881805115389543_3605467977758722625_n.jpg',
      link: '/services'
    },
    {
      id: 3,
      title: 'Thread Lifts',
      description: 'Non-surgical lifting and contouring for a more youthful, defined appearance.',
      image: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/s462sjsw_SnapInsta.to_552081996_17881765785389543_5482520383614813895_n.jpg',
      link: '/services'
    },
    {
      id: 4,
      title: 'Anti-Wrinkle Treatments',
      description: 'Smooth away fine lines and wrinkles with precision anti-wrinkle injections.',
      image: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/prqp1vtj_SnapInsta.to_551056968_17881765797389543_2910706867156139896_n.jpg',
      link: '/services'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="serif-font text-4xl md:text-5xl font-light mb-6 text-black fade-in">
            Our Services
          </h2>
          <div className="w-24 h-px bg-black mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed fade-in">
            Discover our comprehensive range of aesthetic treatments, each designed to enhance your natural beauty with precision and artistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-500"></div>
              </div>
              
              <div className="p-8">
                <h3 className="serif-font text-2xl font-medium text-black mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link 
                  href={service.link}
                  className="inline-flex items-center text-black hover:text-gray-600 transition-colors font-medium"
                >
                  Learn More 
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/services"
            className="btn-primary serif-font text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;