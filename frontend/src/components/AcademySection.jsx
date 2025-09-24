import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle, Users, Award, BookOpen, Crown } from 'lucide-react';

const AcademySection = () => {
  const trainingPrograms = [
    {
      title: "Foundation Artistry",
      description: "An immersive introduction to aesthetic medicine for those beginning their journey into this prestigious field.",
      icon: <BookOpen className="w-6 h-6" />,
      features: ["Medical Aesthetics Theory", "Precision Techniques", "Safety Protocols", "Live Practice Sessions"],
      level: "Beginner"
    },
    {
      title: "Advanced Mastery", 
      description: "Sophisticated techniques for experienced practitioners seeking to elevate their craft to new heights.",
      icon: <Users className="w-6 h-6" />,
      features: ["Advanced Sculpting", "Facial Architecture", "Premium Techniques", "Expert Mentorship"],
      level: "Advanced"
    },
    {
      title: "Elite Certification",
      description: "Exclusive masterclasses reserved for those who aspire to join the upper echelon of aesthetic practitioners.",
      icon: <Crown className="w-6 h-6" />,
      features: ["Signature Lip Artistry", "Full Face Harmonization", "Luxury Client Experience", "Business Excellence"],
      level: "Master"
    }
  ];

  return (
    <section id="training" className="py-20 bg-gradient-to-br from-stone-900 via-gray-900 to-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-6 h-6 text-amber-400 mr-2" />
            <span className="text-sm font-medium text-amber-400 uppercase tracking-wide">Elite Education</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">
            Sculpt by <span className="font-medium text-amber-400">U.K</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Cultivating the next generation of aesthetic visionaries through unparalleled training and mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            {trainingPrograms.map((program, index) => (
              <Card key={index} className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center">
                        {program.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl font-light text-white">
                          {program.title}
                        </CardTitle>
                        <span className="text-amber-400 text-sm font-medium">{program.level} Level</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 leading-relaxed font-light">
                    {program.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1532926381893-7542290edf1d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGF8ZW58MHx8fHwxNzU4NzA2NTI5fDA&ixlib=rb-4.1.0&q=85&w=800"
              alt="Sculpt by U.K elite training environment"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
            
            {/* Floating Stats */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="flex justify-between text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-xs text-amber-400 font-medium">Elite Graduates</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-xs text-amber-400 font-medium">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-xs text-amber-400 font-medium">Awards Won</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-600/20 to-amber-800/20 rounded-2xl p-8 text-center border border-amber-600/30">
          <p className="text-lg text-gray-200 mb-6 font-light">
            All programmes include internationally recognized certification, ongoing mentorship, and exclusive industry access.
          </p>
          <Button 
            size="lg"
            className="bg-amber-600 text-white hover:bg-amber-700 px-8 py-3 rounded-full transition-all duration-300 hover:shadow-xl font-medium"
          >
            Apply for Exclusive Access
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AcademySection;