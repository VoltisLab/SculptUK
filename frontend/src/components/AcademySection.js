import React from 'react';
import { Link } from 'react-router-dom';

const AcademySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden rounded-lg max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              <img 
                src="https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/s462sjsw_SnapInsta.to_552081996_17881765785389543_5482520383614813895_n.jpg" 
                alt="Training at Sculpt by U.K Academy" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="serif-font text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black mb-6">
              Sculpt Academy
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Elevating the next generation of practitioners with accredited, hands-on training.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-black font-medium mb-2">• Foundation Training</h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-4">
                  – Designed for complete beginners with no injecting experience. This course covers theory, facial anatomy, health & safety, injection techniques, and practical skills on live models.
                </p>
              </div>
              
              <div>
                <h3 className="text-black font-medium mb-2">• Advanced Training</h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-4">
                  – Focused on facial sculpting using advanced techniques and a variety of medical instruments.
                </p>
              </div>
              
              <div>
                <h3 className="text-black font-medium mb-2">• Masterclasses</h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-4">
                  – Our exclusive signature programmes for those ready to specialise:
                </p>
                <div className="pl-8 mt-2 space-y-2">
                  <div>
                    <h4 className="text-black text-sm font-medium">• Lip Masterclass (Sculpted Contour Technique)</h4>
                    <p className="text-gray-600 text-xs leading-relaxed pl-4">
                      – precision shaping and advanced lip techniques.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-black text-sm font-medium">• The Art of Sculpting: Full Face Masterclass</h4>
                    <p className="text-gray-600 text-xs leading-relaxed pl-4">
                      – comprehensive harmonisation, balancing all features for the most elegant outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link 
                to="/training"
                className="btn-primary serif-font text-lg"
              >
                Enquire Now
              </Link>
            </div>

            <p className="text-gray-600 text-sm mt-6 leading-relaxed">
              All courses are CPD-accredited and include theory, live model practice, and post-training support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademySection;