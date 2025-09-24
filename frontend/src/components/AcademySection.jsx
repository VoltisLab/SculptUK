import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle, Users, Award, BookOpen } from 'lucide-react';

const AcademySection = () => {
  const trainingPrograms = [
    {
      title: "Foundation Training",
      description: "Designed for complete beginners with no injecting experience. This course covers theory, facial anatomy, health & safety, injection techniques, and practical skills on live models.",
      icon: <BookOpen className="w-6 h-6" />,
      features: ["Theory & Facial Anatomy", "Health & Safety", "Injection Techniques", "Live Model Practice"]
    },
    {
      title: "Advanced Training", 
      description: "Focused on facial sculpting using advanced techniques and a variety of medical instruments.",
      icon: <Users className="w-6 h-6" />,
      features: ["Facial Sculpting", "Advanced Techniques", "Medical Instruments", "Specialized Methods"]
    },
    {
      title: "Masterclasses",
      description: "Our exclusive signature programmes for those ready to specialise in specific areas.",
      icon: <Award className="w-6 h-6" />,
      features: ["Lip Masterclass (Sculpt Contour Class)", "The Art of Sculpt: Full Face", "Precision Techniques", "Advanced Harmonisation"]
    }
  ];

  return (
    <section id="training" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6">
            Sculpt by U.K
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elevating the next generation of practitioners with accredited, hands-on training.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            {trainingPrograms.map((program, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center">
                      {program.icon}
                    </div>
                    <CardTitle className="text-xl font-serif text-gray-900">
                      {program.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3059398/pexels-photo-3059398.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Sculpt by U.K training session"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <p className="text-lg text-gray-700 mb-6">
            All courses are CPD-accredited and include theory, live model practice, and post-training support.
          </p>
          <Button 
            size="lg"
            className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AcademySection;