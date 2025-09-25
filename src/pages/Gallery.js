import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Gallery images with the provided URLs
  const galleryImages = [
    {
      id: 1,
      url: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/ihloolf0_SnapInsta.to_551071066_17881781061389543_540253133835019875_n%20%281%29.jpg',
      title: 'Facial Enhancement Treatment',
      category: 'facial-treatments',
      description: 'Professional facial balancing and contouring procedure'
    },
    {
      id: 2,
      url: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/8mgyab49_SnapInsta.to_551071066_17881781061389543_540253133835019875_n.jpg',
      title: 'Advanced Aesthetic Procedure',
      category: 'facial-treatments',
      description: 'Expert application of dermal fillers for natural enhancement'
    },
    {
      id: 3,
      url: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/ab6099j8_SnapInsta.to_551485792_17881805115389543_3605467977758722625_n.jpg',
      title: 'Precision Treatment',
      category: 'procedures',
      description: 'Detailed aesthetic enhancement with professional precision'
    },
    {
      id: 4,
      url: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/prqp1vtj_SnapInsta.to_551056968_17881765797389543_2910706867156139896_n.jpg',
      title: 'Professional Care',
      category: 'procedures',
      description: 'Expert hands delivering exceptional aesthetic results'
    },
    {
      id: 5,
      url: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/s462sjsw_SnapInsta.to_552081996_17881765785389543_5482520383614813895_n.jpg',
      title: 'Aesthetic Excellence',
      category: 'facial-treatments',
      description: 'State-of-the-art facial enhancement techniques'
    },
    {
      id: 6,
      url: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/o4lgbuq7_548618488_18075513953481582_4540073863437101175_n.jpg',
      title: 'Clinical Environment',
      category: 'clinic-spaces',
      description: 'Our professional clinic setting and equipment'
    },
    {
      id: 7,
      url: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/tttuu4a0_548698576_17881107792389543_84542946011862593_n.jpg',
      title: 'Treatment Session',
      category: 'procedures',
      description: 'Professional treatment delivery in our clinic'
    },
    {
      id: 8,
      url: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/j2anapdm_546613438_17880927918389543_2874396220693872092_n.jpg',
      title: 'Expert Consultation',
      category: 'consultations',
      description: 'Personalized consultation and treatment planning'
    },
    {
      id: 9,
      url: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/k08h122u_SnapInsta.to_551660069_17881765080389543_3685001505789523181_n.jpg',
      title: 'Advanced Techniques',
      category: 'procedures',
      description: 'Cutting-edge aesthetic treatment methods'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Work', count: galleryImages.length },
    { id: 'facial-treatments', label: 'Facial Treatments', count: galleryImages.filter(img => img.category === 'facial-treatments').length },
    { id: 'procedures', label: 'Procedures', count: galleryImages.filter(img => img.category === 'procedures').length },
    { id: 'consultations', label: 'Consultations', count: galleryImages.filter(img => img.category === 'consultations').length },
    { id: 'clinic-spaces', label: 'Our Clinic', count: galleryImages.filter(img => img.category === 'clinic-spaces').length }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
            <h1 className="serif-font text-5xl md:text-6xl font-light mb-8 fade-in text-black">
              Our Gallery
            </h1>
            <div className="w-24 h-px bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed fade-in max-w-3xl mx-auto">
              Discover the artistry behind our work. Each image tells a story of transformation, 
              expertise, and the pursuit of aesthetic excellence.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-black text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400 hover:shadow-md'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onClick={() => openModal(image)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image Container */}
                  <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center">
                      <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
                        <h3 className="serif-font text-xl font-medium mb-2">{image.title}</h3>
                        <p className="text-sm text-gray-200">{image.description}</p>
                        <div className="mt-4 inline-flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-full">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image */}
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="text-white text-center mt-4">
                <h3 className="serif-font text-2xl font-medium mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
            <h2 className="serif-font text-3xl font-light mb-6 text-black">
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Schedule a consultation to discuss how we can help you achieve your aesthetic goals 
              with the same expertise and care shown in our gallery.
            </p>
            <a
              href="/appointment"
              className="inline-block bg-black text-white px-8 py-4 serif-font text-lg hover:bg-gray-800 transition-colors rounded-lg shadow-lg hover:shadow-xl"
            >
              Book Your Consultation
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;