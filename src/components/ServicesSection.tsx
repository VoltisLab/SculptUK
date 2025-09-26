import React from 'react';
import Link from 'next/link';

interface Service {
    title: string;
    description: string;
    image: string;
    features: string[];
}

const ServicesSection: React.FC = () => {
    const services: Service[] = [
        {
            title: 'Facial Balancing',
            description: 'Advanced techniques to harmonize and enhance your natural facial features with precision and artistry.',
            image: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/o4lgbuq7_548618488_18075513953481582_4540073863437101175_n.jpg',
            features: ['Dermal Fillers', 'Cheek Enhancement', 'Jawline Contouring', 'Lip Enhancement']
        },
        {
            title: 'Non-Surgical Enhancements',
            description: 'Revolutionary treatments that deliver exceptional results without invasive procedures or lengthy recovery times.',
            image: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/tttuu4a0_548698576_17881107792389543_84542946011862593_n.jpg',
            features: ['Thread Lifts', 'Skin Boosters', 'Anti-Wrinkle Injections', 'Profile Enhancement']
        },
        {
            title: 'Toxin Treatments',
            description: 'Expertly administered neurotoxin treatments for facial rejuvenation and natural-looking results.',
            image: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/j2anapdm_546613438_17880927918389543_2874396220693872092_n.jpg',
            features: ['Forehead Lines', 'Crow\'s Feet', 'Frown Lines', 'Facial Slimming']
        },
        {
            title: 'Skin Rejuvenation',
            description: 'Restore your skin\'s natural radiance with advanced treatments and cutting-edge technology.',
            image: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/k08h122u_SnapInsta.to_551660069_17881765080389543_3685001505789523181_n.jpg',
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
                            style={{ animationDelay: `${index * 0.1}s` }}
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
                                    href="/services"
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
                            href="/services"
                            className="btn-primary serif-font text-lg px-8 py-3"
                        >
                            View All Services
                        </Link>
                        <Link
                            href="/appointment"
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