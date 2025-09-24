import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  const serviceCategories = [
    {
      category: "Facial Balancing",
      services: [
        {
          name: "Formé V Contour",
          duration: "60 min",
          description: "The ultimate facial enhancement package designed to elongate your chin and define your cheeks for a sculpted, ..."
        },
        {
          name: "2ml Facial Balancing", 
          duration: "60 min",
          description: "UPTO 2 AREAS, the following areas are: Lips, Nose, Cheeks, Chin, Jaw Nasolabial folds. We recommend 2ml minimu..."
        },
        {
          name: "3ml Facial Balancing",
          duration: "60 min", 
          description: "UPTO 3 AREAS, the following areas are: Lips, Nose, Cheeks, Chin, Jaw, Nasolabial folds. We recommend 2ml minim..."
        },
        {
          name: "Sculpte (Facial slimming & harmonisation)",
          duration: "60 min",
          description: "Want to achieve a slimmer, more sculpted face? This package is perfect for you! It includes everything you nee..."
        },
        {
          name: "Harmony",
          duration: "60 min", 
          description: "Harmony is a full-face package that focuses on defining your features. We do a lip augmentation, cheek and chi..."
        },
        {
          name: "Profilè",
          duration: "60 min",
          description: "'Profilè' is our signature profile balancing package. We focus on your lips, nose and chin/ jowl area to perfe..."
        },
        {
          name: "The Elevè Package",
          duration: "90 min",
          description: "This full face rejuvenation package is the ultimate package. A full face of polynucleotide injections, anti-wr..."
        }
      ]
    },
    {
      category: "Threads & lifting", 
      services: [
        {
          name: "Jawline definiton",
          duration: "60 min",
          description: "A jaw thread lift is a minimally invasive cosmetic procedure that uses dissolvable threads to lift and tighten..."
        },
        {
          name: "Foxy eye procedure",
          duration: "45 min", 
          description: "Fox eye threads are a popular cosmetic procedure designed to lift and contour the eyebrows and temples, creati..."
        }
      ]
    },
    {
      category: "Skin Boosters",
      services: [
        {
          name: "REJURAN",
          duration: "30 min",
          description: "Rejuran S helps improve scars through the induction of collagen production and the healing of the skin. Rejura..."
        },
        {
          name: "Profhilio", 
          duration: "30 min",
          description: ""
        },
        {
          name: "Sunekos",
          duration: "45 min",
          description: "Sunekos is an injectable skin treatment that combines hyaluronic acid with a unique blend of amino acids to st..."
        },
        {
          name: "Lip Booster",
          duration: "30 min",
          description: "A lip skin booster is a cosmetic product designed to hydrate, nourish, and enhance the appearance of lips. It ..."
        }
      ]
    },
    {
      category: "Filler Treatments",
      services: [
        {
          name: "The Contour Kisse by Formè",
          duration: "45 min", 
          description: "This technique is most effective on natural lips, previously dissolved lips, or lips with minimal filler. We u..."
        },
        {
          name: "Non surgical rhinoplasty",
          duration: "30 min",
          description: "Non-surgical rhinoplasty, also known as a \"liquid nose job,\" is a cosmetic procedure in which dermal fillers a..."
        },
        {
          name: "UltraVolume Lips by Formè",
          duration: "45 min",
          description: "Here's our signature lips, we use up to 1.5ml-2ml of hyaluronic acid to create the perfect shape and size for ..."
        },
        {
          name: "Russian Lips 0.5ml",
          duration: "45 min",
          description: ""
        },
        {
          name: "Chin Augmentation 1ml",
          duration: "30 min", 
          description: ""
        },
        {
          name: "Cheek Augmentation 1ml",
          duration: "30 min",
          description: ""
        }
      ]
    },
    {
      category: "Botox Treatments",
      services: [
        {
          name: "3 Area",
          duration: "15 min",
          description: "Botox Treatment Areas (Choose Three):•Forehead LinesSmooths horizontal lines across the forehead.•Glabellar Li..."
        },
        {
          name: "Hyperhidrosis (excessive sweating)",
          duration: "30 min",
          description: "Hyperhidrosis is a medical condition characterized by excessive sweating beyond what is necessary to regulate ..."
        },
        {
          name: "Masseter Botox | Facial slimming", 
          duration: "15 min",
          description: "Masseter Botox is a cosmetic procedure that involves injecting botox into the masseter muscle, which is locate..."
        },
        {
          name: "1 Area",
          duration: "15 min",
          description: "Botox Treatment Areas (Choose One):•Forehead LinesSmooths horizontal lines across the forehead.•Glabellar Line..."
        },
        {
          name: "2 Area",
          duration: "15 min", 
          description: "Botox Treatment Areas (Choose Two):•Forehead LinesSmooths horizontal lines across the forehead.•Glabellar Line..."
        }
      ]
    },
    {
      category: "Training Programs",
      services: [
        {
          name: "Signature Lip Masterclass: The Formè Contour Kisse™",
          duration: "£1250",
          description: "A masterclass dedicated entirely to lip artistry. Learn Fatou's exclusive Contour Kisse™ technique, designed to create soft, feminine, elevated lips without heaviness."
        },
        {
          name: "Non-Surgical Rhinoplasty Masterclass",
          duration: "£1250", 
          description: "A specialist course focusing exclusively on the nose. Covers: anatomy, injection points, correction of dorsal humps, tip lift, symmetry adjustments, and safety protocols."
        },
        {
          name: "Facial Contouring Masterclass",
          duration: "£1250",
          description: "Focused on sculpting and defining the lower and mid-face. Covers: jawline sharpening, chin projection, cheek contouring, and balancing side profiles."
        },
        {
          name: "Beginner's Dermal Filler & Foundation Botox Course",
          duration: "£2000",
          description: "Designed for complete beginners entering aesthetics. Covers: Theory & anatomy, Health & safety protocols, Foundation dermal filler (lips, nasolabial folds, marionette lines)"
        },
        {
          name: "Advanced Filler & Botox Course", 
          duration: "£2500",
          description: "Builds upon your foundation knowledge with advanced sculpting and rejuvenation techniques. Covers: Full facial balancing strategies"
        },
        {
          name: "The Art of Formè: Profile & Feature Enhancement (Full Face Masterclass)",
          duration: "£3000",
          description: "Our most prestigious programme. Teaches a full-face approach to harmony and balance, using 6–8ml techniques across multiple areas."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h1 className="serif-font text-5xl md:text-6xl font-light mb-8 fade-in">
              Explore Our Services
            </h1>
            <div className="w-24 h-px bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 leading-relaxed fade-in">
              Enhance your natural beauty with advanced treatments including lip fillers, skin boosters, and anti-wrinkle solutions.
            </p>
          </div>
        </section>

        {/* Services Categories */}
        {serviceCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-black' : 'bg-gray-900/20'}`}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
              <div className="text-center mb-12">
                <h2 className="serif-font text-4xl font-light mb-4 fade-in">
                  {category.category}
                </h2>
                <div className="w-16 h-px bg-white mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div 
                    key={serviceIndex}
                    className="bg-gray-900/30 border border-gray-800 p-6 hover:border-gray-600 transition-all duration-300 fade-in"
                    style={{animationDelay: `${serviceIndex * 0.1}s`}}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-white font-medium text-lg">
                        {service.name}
                      </h3>
                      <span className="text-gray-300 text-sm ml-4">
                        {service.duration}
                      </span>
                    </div>
                    
                    {service.description && (
                      <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                        {service.description}
                      </p>
                    )}
                    
                    <div className="flex justify-between items-center">
                      <button className="text-white hover:text-gray-300 transition-colors text-sm border-b border-transparent hover:border-gray-300">
                        View more
                      </button>
                      <button className="btn-primary text-sm px-4 py-2">
                        Book Now→
                      </button>
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