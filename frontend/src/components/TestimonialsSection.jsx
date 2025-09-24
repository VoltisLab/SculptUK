import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Alicia",
      service: "Facial Balancing",
      text: "I used to be so insecure about my profile, but Fatou enhanced my features without changing me. I feel confident and natural, exactly what I wanted",
      rating: 5
    },
    {
      name: "Kyra", 
      service: "Filler",
      text: "I always thought filler would make me look fake. The results here are so subtle and elegant, I finally feel beautiful.",
      rating: 5
    },
    {
      name: "Amira",
      service: "Facial Sculpting", 
      text: "For years I avoided side photos. After my treatment, I finally love my profile. The results look so natural.",
      rating: 5
    },
    {
      name: "Sarah",
      service: "Lip Enhancement",
      text: "The team made me feel so comfortable throughout the entire process. My lips look naturally fuller and perfectly balanced.",
      rating: 5
    },
    {
      name: "Emma",
      service: "Non-surgical Facelift",
      text: "Amazing results without surgery! I look refreshed and youthful. The attention to detail is incredible.",
      rating: 5
    },
    {
      name: "Lisa",
      service: "Jawline Contouring",
      text: "My jawline is now perfectly defined. The transformation is subtle yet impactful. Couldn't be happier with the results.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6">
            Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With patient consent, we showcase authentic experiences that highlight the power of subtle, natural enhancement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 relative">
                <Quote className="w-8 h-8 text-gray-300 mb-4" />
                
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.service}</div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Quote className="w-6 h-6 text-gray-200" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;