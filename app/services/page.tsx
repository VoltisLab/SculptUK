'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';

interface Service {
    id: string;
    name: string;
    duration: string;
    description: string;
}

interface ServiceCategory {
    category: string;
    categoryId: string;
    services: Service[];
}

const Services: React.FC = () => {
    const serviceCategories: ServiceCategory[] = [
        {
            category: "Facial Balancing",
            categoryId: "facial-balancing",
            services: [
                {
                    id: "forme-v-contour",
                    name: "Formé V Contour",
                    duration: "60 min",
                    description: "The ultimate facial enhancement package designed to elongate your chin and define your cheeks for a sculpted, ..."
                },
                {
                    id: "2ml-facial-balancing",
                    name: "2ml Facial Balancing",
                    duration: "60 min",
                    description: "UPTO 2 AREAS, the following areas are: Lips, Nose, Cheeks, Chin, Jaw Nasolabial folds. We recommend 2ml minimu..."
                },
                {
                    id: "3ml-facial-balancing",
                    name: "3ml Facial Balancing",
                    duration: "60 min",
                    description: "UPTO 3 AREAS, the following areas are: Lips, Nose, Cheeks, Chin, Jaw, Nasolabial folds. We recommend 2ml minim..."
                },
                {
                    id: "sculpte-facial-slimming",
                    name: "Sculpte (Facial slimming & harmonisation)",
                    duration: "60 min",
                    description: "Want to achieve a slimmer, more sculpted face? This package is perfect for you! It includes everything you nee..."
                },
                {
                    id: "harmony",
                    name: "Harmony",
                    duration: "60 min",
                    description: "Harmony is a full-face package that focuses on defining your features. We do a lip augmentation, cheek and chi..."
                },
                {
                    id: "profile",
                    name: "Profilè",
                    duration: "60 min",
                    description: "'Profilè' is our signature profile balancing package. We focus on your lips, nose and chin/ jowl area to perfe..."
                },
                {
                    id: "eleve-package",
                    name: "The Elevè Package",
                    duration: "90 min",
                    description: "This full face rejuvenation package is the ultimate package. A full face of polynucleotide injections, anti-wr..."
                }
            ]
        },
        {
            category: "Threads & lifting",
            categoryId: "threads-lifting",
            services: [
                {
                    id: "jawline-definition",
                    name: "Jawline definiton",
                    duration: "60 min",
                    description: "A jaw thread lift is a minimally invasive cosmetic procedure that uses dissolvable threads to lift and tighten..."
                },
                {
                    id: "foxy-eye-procedure",
                    name: "Foxy eye procedure",
                    duration: "45 min",
                    description: "Fox eye threads are a popular cosmetic procedure designed to lift and contour the eyebrows and temples, creati..."
                }
            ]
        },
        {
            category: "Skin Boosters",
            categoryId: "skin-boosters",
            services: [
                {
                    id: "rejuran",
                    name: "REJURAN",
                    duration: "30 min",
                    description: "Rejuran S helps improve scars through the induction of collagen production and the healing of the skin. Rejura..."
                },
                {
                    id: "profhilio",
                    name: "Profhilio",
                    duration: "30 min",
                    description: ""
                },
                {
                    id: "sunekos",
                    name: "Sunekos",
                    duration: "45 min",
                    description: "Sunekos is an injectable skin treatment that combines hyaluronic acid with a unique blend of amino acids to st..."
                },
                {
                    id: "lip-booster",
                    name: "Lip Booster",
                    duration: "30 min",
                    description: "A lip skin booster is a cosmetic product designed to hydrate, nourish, and enhance the appearance of lips. It ..."
                }
            ]
        },
        {
            category: "Filler Treatments",
            categoryId: "filler-treatments",
            services: [
                {
                    id: "contour-kisse",
                    name: "The Contour Kisse by Formè",
                    duration: "45 min",
                    description: "This technique is most effective on natural lips, previously dissolved lips, or lips with minimal filler. We u..."
                },
                {
                    id: "non-surgical-rhinoplasty",
                    name: "Non surgical rhinoplasty",
                    duration: "30 min",
                    description: "Non-surgical rhinoplasty, also known as a \"liquid nose job,\" is a cosmetic procedure in which dermal fillers a..."
                },
                {
                    id: "ultravolume-lips",
                    name: "UltraVolume Lips by Formè",
                    duration: "45 min",
                    description: "Here's our signature lips, we use up to 1.5ml-2ml of hyaluronic acid to create the perfect shape and size for ..."
                },
                {
                    id: "russian-lips-05ml",
                    name: "Russian Lips 0.5ml",
                    duration: "45 min",
                    description: ""
                },
                {
                    id: "chin-augmentation-1ml",
                    name: "Chin Augmentation 1ml",
                    duration: "30 min",
                    description: ""
                },
                {
                    id: "cheek-augmentation-1ml",
                    name: "Cheek Augmentation 1ml",
                    duration: "30 min",
                    description: ""
                }
            ]
        },
        {
            category: "Botox Treatments",
            categoryId: "botox-treatments",
            services: [
                {
                    id: "botox-3-area",
                    name: "3 Area",
                    duration: "15 min",
                    description: "Botox Treatment Areas (Choose Three):•Forehead LinesSmooths horizontal lines across the forehead.•Glabellar Li..."
                },
                {
                    id: "hyperhidrosis",
                    name: "Hyperhidrosis (excessive sweating)",
                    duration: "30 min",
                    description: "Hyperhidrosis is a medical condition characterized by excessive sweating beyond what is necessary to regulate ..."
                },
                {
                    id: "masseter-botox",
                    name: "Masseter Botox | Facial slimming",
                    duration: "15 min",
                    description: "Masseter Botox is a cosmetic procedure that involves injecting botox into the masseter muscle, which is locate..."
                },
                {
                    id: "botox-1-area",
                    name: "1 Area",
                    duration: "15 min",
                    description: "Botox Treatment Areas (Choose One):•Forehead LinesSmooths horizontal lines across the forehead.•Glabellar Line..."
                },
                {
                    id: "botox-2-area",
                    name: "2 Area",
                    duration: "15 min",
                    description: "Botox Treatment Areas (Choose Two):•Forehead LinesSmooths horizontal lines across the forehead.•Glabellar Line..."
                }
            ]
        },
        {
            category: "Training Programs",
            categoryId: "training-programs",
            services: [
                {
                    id: "lip-masterclass",
                    name: "Signature Lip Masterclass: The Formè Contour Kisse™",
                    duration: "£1250",
                    description: "A masterclass dedicated entirely to lip artistry. Learn Fatou's exclusive Contour Kisse™ technique, designed to create soft, feminine, elevated lips without heaviness."
                },
                {
                    id: "rhinoplasty-masterclass",
                    name: "Non-Surgical Rhinoplasty Masterclass",
                    duration: "£1250",
                    description: "A specialist course focusing exclusively on the nose. Covers: anatomy, injection points, correction of dorsal humps, tip lift, symmetry adjustments, and safety protocols."
                },
                {
                    id: "facial-contouring-masterclass",
                    name: "Facial Contouring Masterclass",
                    duration: "£1250",
                    description: "Focused on sculpting and defining the lower and mid-face. Covers: jawline sharpening, chin projection, cheek contouring, and balancing side profiles."
                },
                {
                    id: "beginner-filler-botox",
                    name: "Beginner's Dermal Filler & Foundation Botox Course",
                    duration: "£2000",
                    description: "Designed for complete beginners entering aesthetics. Covers: Theory & anatomy, Health & safety protocols, Foundation dermal filler (lips, nasolabial folds, marionette lines)"
                },
                {
                    id: "advanced-filler-botox",
                    name: "Advanced Filler & Botox Course",
                    duration: "£2500",
                    description: "Builds upon your foundation knowledge with advanced sculpting and rejuvenation techniques. Covers: Full facial balancing strategies"
                },
                {
                    id: "full-face-masterclass",
                    name: "The Art of Formè: Profile & Feature Enhancement (Full Face Masterclass)",
                    duration: "£3000",
                    description: "Our most prestigious programme. Teaches a full-face approach to harmony and balance, using 6–8ml techniques across multiple areas."
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-24">
                {/* Hero Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
                        <h1 className="serif-font text-5xl md:text-6xl font-light mb-8 fade-in text-black">
                            Explore Our Services
                        </h1>
                        <div className="w-24 h-px bg-black mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 leading-relaxed fade-in">
                            Enhance your natural beauty with advanced treatments including lip fillers, skin boosters, and anti-wrinkle solutions.
                        </p>
                    </div>
                </section>

                {/* Services Categories */}
                {serviceCategories.map((category, categoryIndex) => (
                    <section key={categoryIndex} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                            <div className="text-center mb-12">
                                <h2 className="serif-font text-4xl font-light mb-4 fade-in text-black">
                                    {category.category}
                                </h2>
                                <div className="w-16 h-px bg-black mx-auto"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                                {category.services.map((service, serviceIndex) => (
                                    <div
                                        key={serviceIndex}
                                        className="bg-white border border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-300 fade-in"
                                        style={{ animationDelay: `${serviceIndex * 0.1}s` }}
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-black font-medium text-lg">
                                                {service.name}
                                            </h3>
                                            <span className="text-gray-600 text-sm ml-4">
                                                {service.duration}
                                            </span>
                                        </div>

                                        {service.description && (
                                            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                                {service.description}
                                            </p>
                                        )}

                                        <div className="flex justify-between items-center">
                                            <button className="text-black hover:text-gray-600 transition-colors text-sm border-b border-transparent hover:border-gray-600">
                                                View more
                                            </button>
                                            <Link
                                                href={`/appointment?service=${encodeURIComponent(service.name)}&serviceId=${service.id}&category=${encodeURIComponent(category.category)}`}
                                                className="btn-primary text-sm px-4 py-2"
                                            >
                                                Book Now→
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}
            </main>

            <Footer />
        </div>
    );
};

export default Services;