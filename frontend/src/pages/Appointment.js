import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Appointment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you for your appointment request. We will contact you within 24 hours to confirm your booking.');
    console.log('Form submitted:', formData);
  };

  const services = [
    'Consultation',
    'Dermal Fillers',
    'Anti-Wrinkle Injections',
    'Cheek Enhancement',
    'Lip Enhancement',
    'Jawline Contouring',
    'Thread Lift',
    'Skin Boosters',
    'Microneedling with PRP',
    'Chemical Peels',
    'Other'
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
            <h1 className="serif-font text-5xl md:text-6xl font-light mb-8 fade-in text-black">
              Book an Appointment
            </h1>
            <div className="w-24 h-px bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed fade-in">
              Take the first step towards your aesthetic journey. Our expert team is here to guide you.
            </p>
          </div>
        </section>

        {/* Appointment Form */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow-lg">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-black text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors rounded-lg"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-black text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors rounded-lg"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-black text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors rounded-lg"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-black text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors rounded-lg"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-black text-sm font-medium mb-2">
                    Service of Interest *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 text-black focus:border-black focus:outline-none transition-colors rounded-lg"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date and Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-black text-sm font-medium mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-black focus:border-black focus:outline-none transition-colors rounded-lg"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <label className="block text-black text-sm font-medium mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-black focus:border-black focus:outline-none transition-colors rounded-lg"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-black text-sm font-medium mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-300 text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors resize-vertical rounded-lg"
                    placeholder="Please share any specific concerns or questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-8">
                  <button
                    type="submit"
                    className="btn-primary serif-font text-lg min-w-[200px]"
                  >
                    Submit Request
                  </button>
                  <p className="text-gray-500 text-sm mt-4">
                    We will contact you within 24 hours to confirm your appointment.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
            <h2 className="serif-font text-3xl font-light mb-8 text-black">
              Or Contact Us Directly
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 mx-auto mb-4 border border-black rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-black font-medium mb-2">Phone</h3>
                <p className="text-gray-600">+44 20 1234 5678</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 mx-auto mb-4 border border-black rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-black font-medium mb-2">Email</h3>
                <p className="text-gray-600">info@sculptbyuk.com</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 mx-auto mb-4 border border-black rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-black font-medium mb-2">Location</h3>
                <p className="text-gray-600">London, UK</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Appointment;