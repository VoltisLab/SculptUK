import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Training = () => {
  const courses = [
    {
      title: "Foundation Course in Aesthetic Medicine",
      duration: "3 Days",
      level: "Beginner",
      description: "Comprehensive introduction to non-surgical aesthetic treatments including anatomy, safety protocols, and basic injection techniques.",
      price: "£1,299",
      includes: [
        "Facial anatomy masterclass",
        "Product knowledge and selection",
        "Injection techniques and safety",
        "Patient consultation skills",
        "Certificate of completion",
        "Ongoing mentorship for 3 months"
      ]
    },
    {
      title: "Advanced Dermal Filler Masterclass",
      duration: "2 Days",
      level: "Intermediate",
      description: "Advanced techniques for facial contouring and volumization using premium dermal fillers.",
      price: "£899",
      includes: [
        "Advanced injection patterns",
        "Complication management",
        "Natural enhancement techniques",
        "Hands-on practice with models",
        "Advanced certification",
        "Professional portfolio development"
      ]
    },
    {
      title: "Anti-Wrinkle Treatment Specialist",
      duration: "1 Day",
      level: "Intermediate",
      description: "Master the art of neurotoxin treatments for facial rejuvenation and wrinkle prevention.",
      price: "£599",
      includes: [
        "Precise injection mapping",
        "Dosage calculations",
        "Natural-looking results techniques",
        "Client aftercare protocols",
        "Specialist certification",
        "6-month support program"
      ]
    },
    {
      title: "Business Development in Aesthetics",
      duration: "1 Day",
      level: "All Levels",
      description: "Build and grow your aesthetic practice with proven business strategies and marketing techniques.",
      price: "£399",
      includes: [
        "Practice setup and regulations",
        "Marketing and client acquisition",
        "Pricing strategies",
        "Insurance and legal requirements",
        "Online presence development",
        "Business mentorship"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h1 className="serif-font text-5xl md:text-6xl font-light mb-8 fade-in">
              Professional Training
            </h1>
            <div className="w-24 h-px bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 leading-relaxed fade-in">
              Elevate your career with industry-leading aesthetic training programs designed by experts.
            </p>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/30 border border-gray-800 p-8 hover:border-gray-600 transition-all duration-300 fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-gray-400 text-sm">{course.level}</span>
                      <h3 className="serif-font text-2xl font-medium text-white mt-1">
                        {course.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-300 text-sm">{course.duration}</span>
                      <div className="text-white font-semibold text-lg mt-1">
                        {course.price}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Course Includes:</h4>
                    <ul className="space-y-2">
                      {course.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-gray-300 text-sm">
                          <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="btn-primary w-full">
                    Enquire Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="serif-font text-4xl font-light mb-4">Why Choose Our Training</h2>
              <div className="w-24 h-px bg-white mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center fade-in">
                <div className="w-16 h-16 mx-auto mb-6 border border-white rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="serif-font text-xl font-medium mb-4">Expert Instructors</h3>
                <p className="text-gray-300 leading-relaxed">
                  Learn from industry leaders with years of practical experience and proven results.
                </p>
              </div>
              
              <div className="text-center fade-in" style={{animationDelay: '0.2s'}}>
                <div className="w-16 h-16 mx-auto mb-6 border border-white rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="serif-font text-xl font-medium mb-4">Accredited Certification</h3>
                <p className="text-gray-300 leading-relaxed">
                  Receive recognized qualifications that advance your professional standing in the industry.
                </p>
              </div>
              
              <div className="text-center fade-in" style={{animationDelay: '0.4s'}}>
                <div className="w-16 h-16 mx-auto mb-6 border border-white rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="serif-font text-xl font-medium mb-4">Ongoing Support</h3>
                <p className="text-gray-300 leading-relaxed">
                  Benefit from continued mentorship and support long after your training is complete.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="serif-font text-4xl font-light mb-8">
              Start Your Aesthetic Career Today
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join hundreds of successful practitioners who have transformed their careers with our training programs.
            </p>
            <button className="btn-primary serif-font text-lg">
              Download Course Brochure
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Training;