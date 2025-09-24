import React from 'react';

const TransformationSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 xl:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="serif-font text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black mb-6">
            Transformation
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            With patient consent, we showcase authentic before & after results that highlight the power of subtle, natural enhancement.
          </p>
        </div>

        {/* Before/After Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Before/After Image */}
          <div className="order-2 lg:order-1">
            <div className="max-w-md mx-auto lg:mx-0">
              <img 
                src="https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/prqp1vtj_SnapInsta.to_551056968_17881765797389543_2910706867156139896_n.jpg" 
                alt="Before and after transformation showing facial enhancement results" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Details */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Before Section */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <h3 className="text-black font-semibold text-xl">Before:</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Lips appeared thin with little definition, creating an uneven balance with facial features.
              </p>
            </div>

            {/* After Section */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <h3 className="text-black font-semibold text-xl">After:</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-black mr-3 font-bold">•</span>
                  <span><strong className="text-black">Lip Balancing</strong> — refined shape and symmetry for a softer, natural look.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3 font-bold">•</span>
                  <span><strong className="text-black">Profile Harmonisation</strong> — balanced chin, jawline, and cheeks to enhance overall structure.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3 font-bold">•</span>
                  <span><strong className="text-black">Filler Correction</strong> — dissolving previous work and restoring a natural appearance.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            With patient consent, we showcase authentic before & after results that highlight the power of subtle, natural enhancement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;