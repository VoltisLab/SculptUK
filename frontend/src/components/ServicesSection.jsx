import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Facial Balancing",
      image: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800",
      description: "Harmonize your facial features with our expert balancing techniques for natural, elegant results."
    },
    {
      id: 2,
      title: "Non-surgical enhancements",
      image: "https://images.unsplash.com/photo-1624990306661-b742b5a19514?q=80&w=800",
      description: "Advanced non-invasive treatments that enhance your natural beauty without surgery."
    },
    {
      id: 3,
      title: "Toxin treatments",
      image: "https://images.pexels.com/photos/6800925/pexels-photo-6800925.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Professional toxin treatments for smoother, more youthful-looking skin."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6">Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure your appointment with card protection for peace of mind. No-shows and cancellations are handled with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-serif text-gray-900 mb-3">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-gray-900 hover:text-gray-700 font-medium group"
                >
                  Book Now
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;