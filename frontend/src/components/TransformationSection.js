import React from 'react';

const TransformationSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="px-8 lg:px-16 xl:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="serif-font text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6">
            Transformation
          </h2>
          <p className="text-gray-300 text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            With patient consent, we showcase authentic before & after results that highlight the power of subtle, natural enhancement.
          </p>
        </div>

        {/* Before/After Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Before/After Image */}
          <div className="relative max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1594824694996-f70da46b4b19?w=500&h=600&fit=crop&crop=face" 
              alt="Before and after transformation showing facial enhancement results" 
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Details */}
          <div className="space-y-8">
            {/* Before Section */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-medium text-lg mb-2">Before:</h3>
                <p className="text-gray-300 leading-relaxed">
                  Lips appeared thin with little definition, creating an uneven balance with facial features.
                </p>
              </div>
            </div>

            {/* After Section */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-medium text-lg mb-4">After:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span><strong className="text-white">Lip Balancing</strong> — refined shape and symmetry for a softer, natural look.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span><strong className="text-white">Profile Harmonisation</strong> — balanced chin, jawline, and cheeks to enhance overall structure.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span><strong className="text-white">Filler Correction</strong> — dissolving previous work and restoring a natural appearance.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            With patient consent, we showcase authentic before & after results that highlight the power of subtle, natural enhancement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;