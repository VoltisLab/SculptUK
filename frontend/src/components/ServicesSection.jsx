import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Facial Harmonization",
      image: "https://images.unsplash.com/photo-1623867821208-c4d8025f8194?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBpbmplY3Rpb25zfGVufDB8fHx8MTc1ODcwNjUxOXww&ixlib=rb-4.1.0&q=85&w=800",
      description: "Precision artistry that enhances your natural symmetry through bespoke facial balancing techniques.",
      badge: "Signature"
    },
    {
      id: 2,
      title: "Sculpting Mastery",
      image: "https://images.unsplash.com/photo-1651493782750-9e702644356b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxhZXN0aGV0aWMlMjBpbmplY3Rpb25zfGVufDB8fHx8MTc1ODcwNjUxOXww&ixlib=rb-4.1.0&q=85&w=800",
      description: "Advanced contouring that celebrates your unique beauty while creating refined, enviable definition.",
      badge: "Premium"
    },
    {
      id: 3,
      title: "Rejuvenation Rituals",
      image: "https://images.unsplash.com/photo-1624990306661-b742b5a19514?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxtZWRpY2FsJTIwYmVhdXR5fGVufDB8fHx8MTc1ODcwNTYyN3ww&ixlib=rb-4.1.0&q=85&w=800",
      description: "Transformative treatments that restore youthful radiance with subtle, sophisticated elegance.",
      badge: "Exclusive"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-amber-600 mr-2" />
            <span className="text-sm font-medium text-amber-600 uppercase tracking-wide">Our Artistry</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Curated <span className="font-medium">Experiences</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Each treatment is meticulously crafted to enhance your natural beauty, 
            ensuring results that are both transformative and authentically you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden">
              <CardHeader className="p-0 relative">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Service Badge */}
                  <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {service.badge}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-light text-gray-900 mb-3 tracking-wide">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600 mb-6 leading-relaxed font-light">
                  {service.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-amber-700 hover:text-amber-800 font-medium group/btn"
                >
                  Discover More
                  <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-3 rounded-full transition-all duration-300 font-medium"
          >
            Explore All Treatments
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;