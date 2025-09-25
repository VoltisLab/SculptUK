import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const GallerySection: React.FC = () => {
  const galleryImages = [
    {
      id: 1,
      url: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/o4lgbuq7_548618488_18075513953481582_4540073863437101175_n.jpg',
      alt: 'Professional aesthetic treatment'
    },
    {
      id: 2,
      url: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/tttuu4a0_548698576_17881107792389543_84542946011862593_n.jpg',
      alt: 'Facial enhancement procedure'
    },
    {
      id: 3,
      url: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/j2anapdm_546613438_17880927918389543_2874396220693872092_n.jpg',
      alt: 'Expert consultation session'
    },
    {
      id: 4,
      url: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/k08h122u_SnapInsta.to_551660069_17881765080389543_3685001505789523181_n.jpg',
      alt: 'Advanced treatment technique'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="serif-font text-4xl md:text-5xl font-light mb-6 text-black fade-in">
            Our Work
          </h2>
          <div className="w-24 h-px bg-black mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed fade-in">
            Explore our portfolio of transformations and see the artistry behind our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/gallery"
            className="btn-primary serif-font text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;