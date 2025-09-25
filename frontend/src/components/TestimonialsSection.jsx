import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sophia Chen",
      service: "Facial Harmonization",
      text: "The artistry is unparalleled. Every detail was considered, every enhancement perfectly subtle. I feel like the most elevated version of myself.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1555820585-c5ae44394b79?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxtZWRpY2FsJTIwYmVhdXR5fGVufDB8fHx8MTc1ODcwNTYyN3ww&ixlib=rb-4.1.0&q=85&w=400"
    },
    {
      name: "Isabella Rodriguez", 
      service: "Sculpting Mastery",
      text: "I was seeking refinement, not transformation. The results exceeded every expectation - sophisticated, natural, absolutely flawless.",
      rating: 5,
      image: "https://images.pexels.com/photos/6800925/pexels-photo-6800925.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Amara Williams",
      service: "Rejuvenation Rituals", 
      text: "Years of searching for the right practitioner ended here. The attention to detail and aesthetic vision is simply extraordinary.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBzcGF8ZW58MHx8fHwxNzU4NzA2NTI5fDA&ixlib=rb-4.1.0&q=85&w=400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-stone-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Quote className="w-6 h-6 text-amber-600 mr-2" />
            <span className="text-sm font-medium text-amber-600 uppercase tracking-wide">Client Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Elevated <span className="font-medium">Experiences</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Discover why discerning clients choose us for their aesthetic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden">
              <CardContent className="p-0">
                {/* Client Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} treatment result`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-6">
                  <Quote className="w-8 h-8 text-amber-300 mb-4" />
                  
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 italic font-light">
                    "{testimonial.text}"
                  </p>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-amber-600 font-light">{testimonial.service}</div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-amber-600/10 to-amber-800/10 rounded-2xl p-8 border border-amber-200">
            <h3 className="text-2xl font-light text-gray-900 mb-4">Join Our Community of Elevated Beauty</h3>
            <p className="text-gray-600 mb-6 font-light">Experience the artistry that transforms lives</p>
            <Button className="bg-amber-700 text-white hover:bg-amber-800 px-8 py-3 rounded-full transition-all duration-300 font-medium">
              Share Your Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;