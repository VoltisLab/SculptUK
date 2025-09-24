import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      category: "Facial Balancing",
      treatments: [
        {
          name: "Dermal Fillers",
          description: "Restore volume and enhance facial contours with precision-placed hyaluronic acid fillers.",
          duration: "30-45 mins",
          price: "From £350"
        },
        {
          name: "Cheek Enhancement",
          description: "Define and lift cheekbones for a more sculpted, youthful appearance.",
          duration: "45 mins",
          price: "From £450"
        },
        {
          name: "Jawline Contouring",
          description: "Create a more defined jawline and improve facial harmony.",
          duration: "30 mins",
          price: "From £400"
        },
        {
          name: "Lip Enhancement",
          description: "Achieve fuller, more defined lips while maintaining natural proportions.",
          duration: "30 mins",
          price: "From £300"
        }
      ]
    },
    {
      category: "Non-Surgical Enhancements",
      treatments: [
        {
          name: "Anti-Wrinkle Injections",
          description: "Smooth fine lines and wrinkles with expertly administered neurotoxin treatments.",
          duration: "20-30 mins",
          price: "From £200"
        },
        {
          name: "Thread Lift",
          description: "Lift and tighten sagging skin with dissolvable PDO threads.",
          duration: "60-90 mins",
          price: "From £800"
        },
        {
          name: "Skin Boosters",
          description: "Hydrate and improve skin quality with micro-injections of hyaluronic acid.",
          duration: "45 mins",
          price: "From £250"
        },
        {
          name: "Plasma Pen Treatment",
          description: "Non-surgical skin tightening using plasma energy technology.",
          duration: "60 mins",
          price: "From £500"
        }
      ]
    },
    {
      category: "Advanced Treatments",
      treatments: [
        {
          name: "Microneedling with PRP",
          description: "Stimulate collagen production using your body's own platelet-rich plasma.",
          duration: "75 mins",
          price: "From £350"
        },
        {
          name: "Chemical Peels",
          description: "Improve skin texture and tone with professional-grade chemical peels.",
          duration: "45 mins",
          price: "From £150"
        },
        {
          name: "Laser Skin Resurfacing",
          description: "Advanced laser technology for skin rejuvenation and texture improvement.",
          duration: "60 mins",
          price: "From £400"
        },
        {
          name: "Cryotherapy Facial",
          description: "Innovative cold therapy to tighten skin and reduce inflammation.",
          duration: "30 mins",
          price: "From £180"
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
              Our Services
            </h1>
            <div className="w-24 h-px bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 leading-relaxed fade-in">
              Discover our comprehensive range of aesthetic treatments designed to enhance your natural beauty.
            </p>
          </div>
        </section>

        {/* Services Categories */}
        {services.map((category, categoryIndex) => (
          <section key={categoryIndex} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-black' : 'bg-gray-900/20'}`}>
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
              <div className="text-center mb-12">
                <h2 className="serif-font text-4xl font-light mb-4 fade-in">
                  {category.category}
                </h2>
                <div className="w-16 h-px bg-white mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.treatments.map((treatment, treatmentIndex) => (
                  <div 
                    key={treatmentIndex}
                    className="bg-gray-900/30 border border-gray-800 p-8 hover:border-gray-600 transition-all duration-300 fade-in"
                    style={{animationDelay: `${treatmentIndex * 0.1}s`}}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="serif-font text-xl font-medium text-white">
                        {treatment.name}
                      </h3>
                      <span className="text-gray-300 text-sm">
                        {treatment.duration}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {treatment.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">
                        {treatment.price}
                      </span>
                      <button className="text-white hover:text-gray-300 transition-colors text-sm border-b border-transparent hover:border-gray-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="serif-font text-4xl font-light mb-8">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Book a consultation to discuss your aesthetic goals and discover the perfect treatment plan for you.
            </p>
            <button className="btn-primary serif-font text-lg">
              Schedule Consultation
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;