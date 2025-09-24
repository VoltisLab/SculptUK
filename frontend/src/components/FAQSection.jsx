import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How do I book?",
      answer: "You can book your appointment through our online booking system, by calling our clinic directly, or by using the 'Book an appointment' button throughout our website. We recommend booking in advance as our specialists have limited availability."
    },
    {
      question: "Do I need a deposit?",
      answer: "Yes, we require a deposit to secure your appointment. This deposit is fully refundable if you cancel within 48 hours of your appointment and goes towards your treatment cost."
    },
    {
      question: "Can I cancel or reschedule?", 
      answer: "You can cancel or reschedule your appointment up to 48 hours in advance without penalty. Cancellations within 48 hours may incur a fee. We handle all changes through our secure booking system."
    },
    {
      question: "Do you offer consultations?",
      answer: "Yes, we offer comprehensive consultations where our specialists will assess your needs, discuss treatment options, and create a personalized plan. Initial consultations can be booked separately or combined with your first treatment."
    },
    {
      question: "How long do results last?",
      answer: "Results vary depending on the treatment type. Toxin treatments typically last 3-4 months, while dermal fillers can last 6-18 months. Your specialist will discuss expected duration during your consultation."
    },
    {
      question: "Are treatments painful?",
      answer: "Most of our treatments involve minimal discomfort. We use topical anesthetics and advanced techniques to ensure your comfort. Many clients describe the sensation as mild pressure rather than pain."
    },
    {
      question: "Do you provide aftercare?",
      answer: "Yes, we provide comprehensive aftercare instructions and support. This includes follow-up appointments, 24/7 contact for concerns, and detailed care guidelines to optimize your results."
    },
    {
      question: "Do I have an out medical?",
      answer: "We maintain the highest medical standards and have protocols in place for any eventuality. Our practitioners are fully qualified medical professionals, and we have comprehensive insurance and emergency procedures."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our treatments and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader 
                className="cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <CardTitle className="flex justify-between items-center text-lg font-medium text-gray-900">
                  <span>{faq.question}</span>
                  <div className="ml-4">
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              
              {openFAQ === index && (
                <CardContent className="pt-0 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;