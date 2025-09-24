import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, CheckCircle, Sparkles } from 'lucide-react';

const TransformationSection = () => {
  const transformationDetails = [
    "Lip Architecture — precision sculpting for naturally voluptuous definition",
    "Facial Symmetry — harmonious balancing that enhances your inherent beauty", 
    "Skin Refinement — advanced techniques for luminous, youthful radiance"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-amber-600 mr-2" />
            <span className="text-sm font-medium text-amber-600 uppercase tracking-wide">Artistry Unveiled</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            The Art of <span className="font-medium">Transformation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Witness the power of precision artistry through authentic results that celebrate natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555820585-c5ae44394b79?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxtZWRpY2FsJTIwYmVhdXR5fGVufDB8fHx8MTc1ODcwNTYyN3ww&ixlib=rb-4.1.0&q=85&w=800"
                alt="Elegant transformation showcasing refined aesthetic results"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Achievement Badge */}
            <div className="absolute -top-4 -right-4 bg-amber-600 text-white rounded-full w-24 h-24 flex items-center justify-center shadow-xl">
              <div className="text-center">
                <Star className="w-6 h-6 mx-auto mb-1 fill-white" />
                <div className="text-xs font-medium">Award Winning</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="border-0 bg-gradient-to-r from-amber-50 to-stone-50 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white fill-white" />
                  </div>
                  <h3 className="text-xl font-light text-gray-900">Before Enhancement</h3>
                </div>
                <p className="text-gray-700 leading-relaxed font-light">
                  Natural features with potential for refined definition and enhanced symmetry.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-r from-stone-50 to-amber-50 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-light text-gray-900">After Artistry</h3>
                </div>
                <div className="space-y-4">
                  {transformationDetails.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed font-light">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-br from-gray-900 to-amber-900 rounded-2xl p-8 text-white">
              <blockquote className="text-center">
                <p className="text-lg italic font-light mb-4">
                  "Results that speak to the soul of sophisticated beauty"
                </p>
                <cite className="text-amber-400 text-sm font-medium">— With client consent</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;