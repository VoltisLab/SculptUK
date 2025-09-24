import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Alicia",
      treatment: "Facial Balancing",
      text: "I used to be so insecure about my profile, but Fatou enhanced my features without changing me. I feel confident and natural, exactly what I wanted"
    },
    {
      name: "Kyra", 
      treatment: "Filler",
      text: "I always thought filler would make me look fake. The results here are so subtle and elegant, I finally feel beautiful."
    },
    {
      name: "Amira",
      treatment: "Facial Sculpting", 
      text: "For years I avoided side photos. After my treatment, I finally love my profile. The results look so natural."
    },
    {
      name: "Sarah",
      treatment: "Lip Enhancement",
      text: "The team made me feel so comfortable throughout the entire process. My lips look naturally fuller and perfectly balanced."
    },
    {
      name: "Emma",
      treatment: "Non-surgical Facelift",
      text: "Amazing results without surgery! I look refreshed and youthful. The attention to detail is incredible."
    },
    {
      name: "Lisa", 
      treatment: "Jawline Contouring",
      text: "My jawline is now perfectly defined. The transformation is subtle yet impactful. Couldn't be happier with the results."
    }
  ];

  const StarRating = () => (
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="px-8 lg:px-16 xl:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="serif-font text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black mb-6">
            Testimonials
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            With patient consent, we showcase authentic before & after results that highlight the power of subtle, natural enhancement.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 border border-gray-200 p-8 rounded-lg hover:border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Star Rating */}
              <StarRating />

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="text-black font-medium">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;