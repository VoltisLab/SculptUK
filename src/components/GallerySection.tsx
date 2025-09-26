import React from 'react';

interface GalleryItem {
    image: string;
    title: string;
    description: string;
}

const GallerySection: React.FC = () => {
    const galleryImages: GalleryItem[] = [
        {
            image: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/8mgyab49_SnapInsta.to_551071066_17881781061389543_540253133835019875_n.jpg',
            title: 'Lip Enhancement',
            description: 'Natural lip augmentation'
        },
        {
            image: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/ab6099j8_SnapInsta.to_551485792_17881805115389543_3605467977758722625_n.jpg',
            title: 'Facial Contouring',
            description: 'Precision sculpting technique'
        },
        {
            image: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/prqp1vtj_SnapInsta.to_551056968_17881765797389543_2910706867156139896_n.jpg',
            title: 'Profile Enhancement',
            description: 'Jawline and chin balancing'
        },
        {
            image: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/s462sjsw_SnapInsta.to_552081996_17881765785389543_5482520383614813895_n.jpg',
            title: 'Treatment Process',
            description: 'Professional technique demonstration'
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="serif-font text-5xl md:text-6xl lg:text-7xl font-light text-black mb-6">
                        Our Work
                    </h2>
                    <div className="w-24 h-px bg-black mx-auto mb-8"></div>
                    <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                        Discover the artistry behind our treatments. Each procedure is carefully crafted to enhance your natural beauty with precision and elegance.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {galleryImages.map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-500 fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Image */}
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-center text-white p-6">
                                        <h3 className="serif-font text-xl font-medium mb-2">{item.title}</h3>
                                        <p className="text-sm text-gray-300">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <p className="text-gray-600 mb-8 text-lg">
                        Ready to begin your transformation journey?
                    </p>
                    <button className="btn-primary serif-font">
                        View Full Gallery
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;