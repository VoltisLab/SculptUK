import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How do I secure my consultation?",
      answer: "Begin your journey with a personalized consultation through our exclusive booking platform. Our concierge team will coordinate your appointment to ensure optimal scheduling and preparation."
    },
    {
      question: "What investment is required?",
      answer: "We require a consultation deposit which is applied to your treatment investment. This ensures dedicated time with our specialists and demonstrates commitment to your aesthetic journey."
    },
    {
      question: "Can appointments be rescheduled?", 
      answer: "We understand that luxury requires flexibility. Appointments may be rescheduled with 48-hour notice. Our concierge team handles all adjustments with discretion and care."
    },
    {
      question: "Do you offer consultations?",
      answer: "Every client begins with a comprehensive aesthetic consultation where we assess your unique features, discuss your vision, and create a bespoke treatment plan tailored to your goals."
    },
    {
      question: "How enduring are the results?",
      answer: "Results vary based on treatment selection and individual factors. Our premium treatments typically maintain their elegance for 6-18 months, with some achieving longevity beyond two years."
    },
    {
      question: "What about comfort during treatment?",
      answer: "Client comfort is paramount. We employ advanced comfort techniques including premium topical anesthetics, cutting-edge methods, and a serene treatment environment to ensure your complete ease."
    },
    {
      question: "Is aftercare provided?",
      answer: "Our commitment extends beyond treatment. You receive comprehensive aftercare guidance, 24/7 concierge support, follow-up appointments, and access to our exclusive client care program."
    },
    {
      question: "What safety protocols exist?",
      answer: "We maintain the industry's highest standards with board-certified practitioners, comprehensive insurance, advanced safety protocols, and immediate access to medical support should any concerns arise."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-6 h-6 text-amber-600 mr-2" />
            <span className="text-sm font-medium text-amber-600 uppercase tracking-wide">Your Questions</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Curated <span className="font-medium">Answers</span>
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Everything you need to know about your aesthetic journey with us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardHeader 
                className="cursor-pointer hover:bg-stone-50/50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <CardTitle className="flex justify-between items-center text-lg font-light text-gray-900">
                  <span className="pr-4">{faq.question}</span>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-amber-600 transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-amber-600 transition-transform duration-200" />
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              
              {openFAQ === index && (
                <CardContent className="pt-0 pb-6 animate-in slide-in-from-top-2 duration-300">
                  <div className="border-t border-amber-100 pt-4">
                    <p className="text-gray-600 leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-amber-600/10 to-amber-800/10 rounded-2xl p-8 border border-amber-200">
            <h3 className="text-xl font-light text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6 font-light">Our concierge team is here to assist with any additional inquiries.</p>
            <button className="bg-amber-700 text-white px-8 py-3 rounded-full hover:bg-amber-800 transition-all duration-300 font-medium">
              Speak with Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;