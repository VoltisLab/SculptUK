import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book?",
      answer: "You can book your appointment through our online booking system or by calling us directly. We'll guide you through the process and help you choose the right treatment."
    },
    {
      question: "Do I need a deposit?", 
      answer: "Yes, we require a deposit to secure your appointment. This helps us manage our schedule effectively and ensures your commitment to your treatment."
    },
    {
      question: "Can I cancel or reschedule?",
      answer: "Yes, you can cancel or reschedule your appointment. Please give us at least 48 hours notice to avoid any cancellation fees."
    },
    {
      question: "Do you offer consultations?",
      answer: "Absolutely! We offer comprehensive consultations to discuss your goals, assess your needs, and create a personalized treatment plan."
    },
    {
      question: "How long do results last?",
      answer: "Results vary depending on the treatment. Dermal fillers typically last 6-18 months, while Botox results last 3-4 months. We'll discuss expected duration during your consultation."
    },
    {
      question: "Are treatments painful?",
      answer: "We use topical numbing creams and techniques to minimize discomfort. Most clients describe the sensation as mild pressure with minimal pain."
    },
    {
      question: "Do you provide aftercare?",
      answer: "Yes, comprehensive aftercare instructions are provided after every treatment, along with 24/7 support for any concerns or questions."
    },
    {
      question: "Do I have an out medical?",
      answer: "We have comprehensive medical protocols and emergency procedures in place. All treatments are performed by qualified medical professionals."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black">
      <div className="px-8 lg:px-16 max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="serif-font text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            You'll receive a full library of documents customized for California auto detailers:
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-900/30 transition-colors"
              >
                <h3 className="text-white font-medium text-lg">{faq.question}</h3>
                <div className="flex-shrink-0 ml-4">
                  <svg 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 border-t border-gray-800">
                  <p className="text-gray-300 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;