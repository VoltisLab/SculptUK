import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, CheckCircle } from 'lucide-react';

const TransformationSection = () => {
  const beforeAfterFeatures = [
    "Lip Balancing — refined shape and symmetry for a softer, natural look.",
    "Profile Harmonisation — balanced chin, jawline, and cheeks to enhance overall structure.", 
    "Filler Correction — dissolving previous work and restoring a natural appearance."
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6">
            Transformation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With patient consent, we showcase authentic before & after results that highlight the power of subtle, natural enhancement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800"
              alt="Before and after transformation showing facial enhancement results"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            </div>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <h3 className="text-xl font-serif text-gray-900">Before:</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Lips appeared thin with little definition, creating an uneven balance with facial features.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <h3 className="text-xl font-serif text-gray-900">After:</h3>
                </div>
                <ul className="space-y-3">
                  {beforeAfterFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6">
              <p className="text-gray-700 text-center italic">
                "Results showcase the power of subtle, natural enhancement with patient consent."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;